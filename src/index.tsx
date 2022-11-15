import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { config } from './config';
import { main } from './configuration';
import { store } from './configuration/setup/store';
import { handleLoginRedirect } from './configuration/login/redirect';
import { ErrorBoundary } from './components/ErrorBoundary';
import App from './layout/App';

const renderApplication = () => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <ErrorBoundary>
            <Provider store={store}>
                <HashRouter>
                    <App />
                </HashRouter>
            </Provider>
        </ErrorBoundary>
    );
};

const isDev = import.meta.env.DEV;
const isProd = import.meta.env.PROD;
const isProdPreview = import.meta.env.VITE_PRODUCTION_PREVIEW;

if ((isDev && config.enableMockServer) || isProdPreview) {
    import('../mocks/serviceMock').then(({ worker }) => {
        worker.start();
        main(renderApplication);
    });
}

if (window.location.href.startsWith(config.login.redirectUri as string)) {
    handleLoginRedirect();
} else if (isProd && !isProdPreview) {
    main(renderApplication);
}
