import { IStateSchema } from 'app/providers/StoreProvider';
import { getErrorState } from './getErrorState';

describe('getErrorState.test', () => {
    test('should return Error state', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: '',
                password: '',
                isLoading: false,
                error: 'error',
            },
        };
        expect(getErrorState(state as IStateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getErrorState(state as IStateSchema)).toEqual(undefined);
    });
});
