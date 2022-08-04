/* eslint-disable camelcase, no-console */
import { UserProfile as Profile, User, UserManager, WebStorageStateStore, InMemoryWebStorage } from 'oidc-client-ts';
import join from 'lodash/fp/join';
import { mapUserProfile } from './userProfile';
import { config } from '../../config';
import { OAuthConfig } from '..';
import { AccessToken } from '../tokenHandling/tokenSlice';
import { UserProfile } from './loginSlice';

const RETRY_SIGNIN_TIMEOUT_IN_MS = 30000;

const retrySigninSilent = (oauthConfig: OAuthConfig, userManager: UserManager) => {
    userManager.signinSilent().catch((error: Error) => {
        if (error.message === 'login_required') {
            oauthConfig.onSessionExpired();
        } else {
            setTimeout(() => retrySigninSilent(oauthConfig, userManager), RETRY_SIGNIN_TIMEOUT_IN_MS);
        }
    });
};

export interface SessionRenewedResult {
    accessToken: AccessToken;
    idToken: Profile;
    profile: UserProfile;
    locale: string;
}

export const adaptPublishedInfo = (result: any): SessionRenewedResult => ({
    accessToken: result.access_token,
    idToken: result.profile,
    locale: result.profile?.locale ?? 'en-GB',
    profile: mapUserProfile(result.profile),
});

export const createUserManager = () => {
    const redirectUri = config.login.redirectUri;
    const silentRedirectUri = config.login.silentRedirectUri;

    const settings = {
        authority: `${config.login.authority}`,
        client_id: `${config.login.clientId}`,
        client_secret: `${config.login.clientId}`,
        loadUserInfo: false,
        redirect_uri: `${redirectUri}`,
        response_type: 'code',
        scope: join(' ', config.login.oauthScope),
        silent_redirect_uri: `${silentRedirectUri || redirectUri}`,
        includeIdTokenInSilentRenew: false,
        automaticSilentRenew: true,
        staleStateAge: 600,
        userStore: new WebStorageStateStore({ store: new InMemoryWebStorage() }),
    };

    return new UserManager(settings);
};

export const configureUserManager = (oauthConfig: OAuthConfig, userManager: UserManager) => {
    userManager.events.addUserLoaded((user) => {
        oauthConfig.onSessionRenewed(adaptPublishedInfo(user));
    });

    userManager.events.addUserUnloaded(() => {
        oauthConfig.onSessionExpired();
    });

    userManager.events.addSilentRenewError(() => {
        retrySigninSilent(oauthConfig, userManager);
    });

    userManager.events.addUserSignedOut((...args) => {
        oauthConfig.onSessionExpired();
    });

    return userManager;
};

export const configureMockUserManager = (oauthConfig: OAuthConfig): UserManager => {
    console.warn('[configuration/login/oidc-session] Using mocked authorization due to config setting');

    const signinSilent = () => {
        const userSettings = {
            access_token: 'valid-mocked-oauth-bogus-token',
            profile: {
                iss: 'Issuer Identifier',
                aud: 'Audience(s): client_id',
                exp: 10,
                iat: 5,
                account: 'mockaccount',
                azp: 'test-client',
                email: 'test@example.com',
                family_name: 'Client',
                given_name: 'Test',
                name: 'Test Client',
                sub: 'prod-rio-users:mock-user',
                locale: config.login.mockLocale,
            },
            id_token: 'id_token',
            session_state: 'session_state',
            refresh_token: 'refresh_token',
            token_type: 'token_type',
            scope: 'scope',
            expires_at: 100000,
            state: 'state',
        };

        const user = new User(userSettings);
        oauthConfig.onSessionRenewed(adaptPublishedInfo(userSettings));
        return Promise.resolve(user);
    };

    const clearStaleState = () => {
        console.info('[configuration/login/oidc-session] Stale state cleared');
        return Promise.resolve();
    };

    return { signinSilent, clearStaleState } as UserManager;
};
