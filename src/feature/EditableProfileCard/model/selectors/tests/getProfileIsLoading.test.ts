import { IStateSchema } from 'app/providers/StoreProvider';
import { getIsProfileIsLoading } from '../selectors';

describe('getProfileIsLoading.test.ts', () => {
    test('should return value of state', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getIsProfileIsLoading(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getIsProfileIsLoading(state as IStateSchema)).toEqual(false);
    });
});
