import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ECurrency } from 'enteties/Currency';
import { ECountry } from 'enteties/Country';
import { updateProfileData } from './updateProfileData';
import { EValidationError } from '../../types/profile';

const data = {
    id: '1',
    firstName: 'test',
    lastName: 'test2',
    username: 'testUser',
    age: 55,
    currency: ECurrency.RUB,
    country: ECountry.Russia,
    city: 'Москва',
    avatar: 'test.png',
};

const wrongValidateData = {
    id: '1',
    firstName: '',
    lastName: '',
    username: 'testUser',
    age: 55,
    currency: ECurrency.RUB,
    country: ECountry.Russia,
    city: 'Москва',
    avatar: 'test.png',
};

describe('updateProfileData.test', () => {
    test('sucess request', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('client error request', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: wrongValidateData,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            EValidationError.INCORRECT_USER_DATA,
        ]);
    });

    test('failed request', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            EValidationError.SERVER_ERROR,
        ]);
    });
});
