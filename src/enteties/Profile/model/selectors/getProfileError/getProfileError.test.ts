import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileIsError.test.ts', () => {
    test('should return value of state', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                error: 'some',
            },
        };
        expect(getProfileError(state as IStateSchema)).toEqual('some');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileError(state as IStateSchema)).toEqual('');
    });
});
