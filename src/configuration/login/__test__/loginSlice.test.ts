import { store } from '../../setup/store';
import { userSessionExpired, userSessionRenewed } from '../loginSlice';

describe('configuration/login/loginSlice', () => {
    it('should bring a sensible initial state to the table', () => {
        const expectedInitialState = {
            hasUserSessionEverExpired: false,
            userProfile: null,
            userSessionExpired: false,
        };

        expect(store.getState().login).toEqual(expectedInitialState);
    });

    it('should reflect an expired user session', () => {
        store.dispatch(userSessionExpired());

        expect(store.getState().login).toEqual({
            hasUserSessionEverExpired: true,
            userProfile: null,
            userSessionExpired: true,
        });
    });

    it('should reflect a renewed user session', () => {
        store.dispatch(userSessionExpired());
        store.dispatch(userSessionRenewed());

        expect(store.getState().login).toEqual({
            hasUserSessionEverExpired: true,
            userProfile: null,
            userSessionExpired: false,
        });
    });
});
