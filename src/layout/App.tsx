import './App.css';

import { IntlProvider } from 'react-intl';
import { Routes, Route } from 'react-router-dom';
import { SessionExpiredDialog } from '@rio-cloud/rio-session-expired-info';
import ApplicationLayout from '@rio-cloud/rio-uikit/lib/es/ApplicationLayout';
import NotificationsContainer from '@rio-cloud/rio-uikit/lib/es/NotificationsContainer';

import { DEFAULT_LOCALE } from '../configuration/lang/lang';
import { isUserSessionExpired } from '../configuration/login/loginSlice';
import { useAppDispatch, useAppSelector } from '../configuration/setup/hooks';
import { getDisplayMessages, getLocale } from '../configuration/lang/langSlice';
import { DEFAULT_ROUTE, ROUTE_MORE } from '../routes/routes';
import DefaultRedirect from '../routes/DefaultRedirect';
import RouteUpdater from '../routes/RouteUpdater';

import { getSessionExpiredAcknowledged, hideSessionExpiredDialog } from './appSlice';
import AppHeader from '../features/header/AppHeader';
import Intro from '../pages/Intro';
import More from '../pages/More';

const App = () => {
    const dispatch = useAppDispatch();

    const userLocale = useAppSelector(getLocale);
    const displayMessages = useAppSelector(getDisplayMessages);
    const isSessionExpired = useAppSelector(isUserSessionExpired);
    const sessionExpiredAcknowledged = useAppSelector(getSessionExpiredAcknowledged);

    if (!displayMessages || !userLocale) {
        return null;
    }

    const handleSessionExpiredDialogClose = () => dispatch(hideSessionExpiredDialog);
    const showSessionExpired = isSessionExpired && !sessionExpiredAcknowledged;

    return (
        <IntlProvider defaultLocale={DEFAULT_LOCALE} key={userLocale} locale={userLocale} messages={displayMessages}>
            <ApplicationLayout className={'StarterTemplate'}>
                <ApplicationLayout.Header>
                    <AppHeader />
                </ApplicationLayout.Header>
                <ApplicationLayout.Body>
                    <NotificationsContainer />
                    <SessionExpiredDialog
                        locale={userLocale}
                        onClose={handleSessionExpiredDialogClose}
                        show={showSessionExpired}
                    />
                    <Routes>
                        <Route path={DEFAULT_ROUTE} element={<Intro />} />
                        <Route path={ROUTE_MORE} element={<More />} />
                        <Route path="*" element={<DefaultRedirect />} />
                    </Routes>
                    <RouteUpdater />
                </ApplicationLayout.Body>
            </ApplicationLayout>
        </IntlProvider>
    );
};

export default App;
