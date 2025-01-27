import { IStateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from '../selectors';

describe('getProfileReadonly.test.ts', () => {
    test('should return value of state', () => {
        const state: DeepPartial<IStateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as IStateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileReadonly(state as IStateSchema)).toEqual(false);
    });
});
