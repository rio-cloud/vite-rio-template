import { render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from '../App';
import messagesEN from '../../translations/en-GB.json';
import { getDisplayMessages, getLocale } from '../../../configuration/lang/langSlice';
import { isUserSessionExpired } from '../../../configuration/login/loginSlice';
import { getSessionExpiredAcknowledged } from '../appSlice';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

const mockSelectors = (selector: any, mockStore: any = {}) => {
    if (selector === getLocale) {
        return 'de-DE';
    } else if (selector === getDisplayMessages) {
        return messagesEN;
    } else if (selector === isUserSessionExpired) {
        return false;
    } else if (selector === getSessionExpiredAcknowledged) {
        return false;
    }
    return selector(mockStore);
};

describe('Test App', () => {
    const useSelectorMock = reactRedux.useSelector as jest.Mock;
    const useDispatchMock = reactRedux.useDispatch as jest.Mock;

    beforeEach(() => {
        useDispatchMock.mockImplementation(() => () => {});
        useSelectorMock.mockImplementation((selector: any) => mockSelectors(selector));
    });

    afterEach(() => {
        useDispatchMock.mockClear();
        useSelectorMock.mockClear();
    });

    test('Application layout is rendered', () => {
        const { container } = renderWithRouter(<App />);

        const element = container.firstChild as HTMLElement;
        expect(element.classList).toContain('StarterTemplate');
    });
});

const renderWithRouter = (component: JSX.Element) => {
    return render(
        <HashRouter>
            {component}
        </HashRouter>
    );
};
