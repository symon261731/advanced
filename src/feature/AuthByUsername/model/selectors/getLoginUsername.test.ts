import { IStateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('should return value of state', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'user',
            },
        };
        expect(getLoginUsername(state as IStateSchema)).toEqual('user');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getLoginUsername(state as IStateSchema)).toEqual('');
    });
});
