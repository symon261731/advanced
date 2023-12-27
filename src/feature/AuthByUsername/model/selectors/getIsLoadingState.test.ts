import { IStateSchema } from 'app/providers/StoreProvider';
import { getIsLoadingState } from './getIsLoadingState';

describe('getIsLoadingState.test', () => {
    test('should return value of state', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getIsLoadingState(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getIsLoadingState(state as IStateSchema)).toEqual(false);
    });
});
