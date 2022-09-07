import packageJson from '../package.json';

export interface ConfigState {
    backend: {
        AUTHENTICATION_SERVICE: string | undefined;
        MENU_SERVICE: string | undefined;
    };
    homeRoute: string | undefined;
    id: string | undefined;
    login: {
        authority: string | undefined;
        clientId: string | undefined;
        oauthScope: string[];
        mockAuthorization: boolean;
        mockLocale: string | undefined;
        preventRedirect: boolean;
        redirectUri: string | undefined;
        silentRedirectUri: string | undefined;
    };
    serviceVersion: string;
    serviceEnvironment: string;
    enableMockServer: boolean;
    logoutUri: string | undefined;
    sentryToken: string | undefined;
    sentryModuleName: string;
}

export const config: ConfigState = {
    backend: {
        AUTHENTICATION_SERVICE: import.meta.env.VITE_AUTHENTICATION_SERVICE,
        MENU_SERVICE: import.meta.env.VITE_MENU_SERVICE,
    },
    homeRoute: import.meta.env.VITE_HOME_ROUTE,
    id: import.meta.env.VITE_ID,
    login: {
        authority: import.meta.env.VITE_LOGIN_AUTHORITY,
        // TODO: Request and supply your App's `client_id` as
        //       well as the needed OAuth scopes here
        clientId: '<you-need-to-obtain-your-own-client-id>',
        oauthScope: ['openid', 'profile', 'email'],
        mockAuthorization: import.meta.env.VITE_LOGIN_MOCK_AUTHORIZATION,
        mockLocale: import.meta.env.VITE_LOGIN_MOCK_LOCALE,
        preventRedirect: import.meta.env.VITE_LOGIN_PREVENT_REDIRECT,
        redirectUri: import.meta.env.VITE_LOGIN_REDIRECT_URI,
        silentRedirectUri: import.meta.env.VITE_LOGIN_SILENT_REDIRECT_URI,
    },
    serviceVersion: packageJson.version,
    serviceEnvironment: import.meta.env.MODE;
    enableMockServer: import.meta.env.DEV || import.meta.env.TEST,
    logoutUri: import.meta.env.VITE_LOGOUT_URI,
    sentryToken: import.meta.env.VITE_SENTRY_DSN,
    sentryModuleName: 'starterTemplate',
};
