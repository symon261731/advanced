import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileValidationErrors } from './getProfileValidationError';
import { EValidationError } from '../../types/profile';

describe('getProfileValidationError.test.ts', () => {
    test('should return value of state', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                validateError: [EValidationError.INCORRECT_AGE],
            },
        };
        expect(getProfileValidationErrors(state as IStateSchema)).toEqual([EValidationError.INCORRECT_AGE]);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileValidationErrors(state as IStateSchema)).toEqual([]);
    });
});
