import './utils/polyfills';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { worker } from '../mocks/serviceMock';
import { config } from './config';
import { main } from './configuration';
import { store } from './configuration/setup/store';
import { handleLoginRedirect } from './configuration/login/redirect';
import { ErrorBoundary } from './components/ErrorBoundary';
import App from './layout/App';

const renderApplication = () => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <ErrorBoundary>
                <Provider store={store}>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </Provider>
            </ErrorBoundary>
        </React.StrictMode>
    );
};

if (config.enableMockServer) {
    worker.start();
}

if (window.location.href.startsWith(config.login.redirectUri as string)) {
    handleLoginRedirect();
} else {
    main(renderApplication);
}
