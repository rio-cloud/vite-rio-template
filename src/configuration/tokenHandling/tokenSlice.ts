import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserProfile as Profile } from 'oidc-client-ts';

import type { RootState } from '../../configuration/setup/store';

import { accessToken } from './accessToken';

export type AccessToken = string | undefined | null;

export interface AccessTokenState {
    accessToken: AccessToken;
    idToken: Profile | null;
}

const initialState: AccessTokenState = {
    accessToken: accessToken.getAccessToken(),
    idToken: null,
};

const tokenSlice = createSlice({
    name: 'tokenHandling',
    initialState,
    reducers: {
        accessTokenStored: (state, action: PayloadAction<AccessToken>) => {
            state.accessToken = action.payload;
        },
        idTokenStored: (state, action: PayloadAction<Profile>) => {
            state.idToken = action.payload;
        },
    },
});

export const { accessTokenStored, idTokenStored } = tokenSlice.actions;

export const getAccessToken = (state: RootState) => state.tokenHandling.accessToken ?? 'NO_ACCESS_TOKEN_AVAILABLE';
export const getIdToken = (state: RootState) => state.tokenHandling.idToken;

export default tokenSlice.reducer;
