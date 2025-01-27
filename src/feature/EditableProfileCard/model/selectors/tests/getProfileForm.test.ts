import { IStateSchema } from 'app/providers/StoreProvider';
import { ECurrency } from 'enteties/Currency';
import { ECountry } from 'enteties/Country';
import { getProfileForm } from '../selectors';

describe('getProfileForm.test.ts', () => {
    test('should return value of state', () => {
        const data = {
            firstName: 'test',
            lastName: 'test',
            currency: ECurrency.EUR,
            country: ECountry.Russia,
            age: 22,
        };
        const state: DeepPartial<IStateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as IStateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getProfileForm(state as IStateSchema)).toEqual(undefined);
    });
});
