import { configureStore, Reducer } from '@reduxjs/toolkit';

import configReducer from './configSlice';
import loginReducer from '../login/loginSlice';
import langReducer from '../lang/langSlice';
import tokenReducer from '../tokenHandling/tokenSlice';
import appReducer from '../../services/appSlice';

export const store = configureStore({
    reducer: {
        config: configReducer,
        lang: langReducer,
        app: appReducer,
        login: loginReducer,
        tokenHandling: tokenReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...),
});

// Infer the `RootState` and `RootDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
