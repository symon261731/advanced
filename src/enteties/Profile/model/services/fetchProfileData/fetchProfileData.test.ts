import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ECurrency } from 'enteties/Currency';
import { ECountry } from 'enteties/Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
    firstName: 'test',
    lastName: 'test2',
    username: 'testUser',
    age: 55,
    currency: ECurrency.RUB,
    country: ECountry.Russia,
    city: 'Москва',
    avatar: 'test.png',
};

describe('fetchProfileData.test', () => {
    test('sucess request', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('2');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('failed request', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);

        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('2');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
