import { ECurrency } from 'enteties/Currency';
import { ECountry } from 'enteties/Country';
import { validateProfileData } from './validateProfileData';
import { EValidationError } from '../../types/profile';

const failedData = {
    firstName: '',
    lastName: '',
    username: 'testUser',
    age: 55,
    currency: ECurrency.RUB,
    country: ECountry.Russia,
    city: 'Москва',
    avatar: 'test.png',
};

const sucessData = {
    firstName: 'test',
    lastName: 'test',
    username: 'testUser',
    age: 55,
    currency: ECurrency.RUB,
    country: ECountry.Russia,
    city: 'Москва',
    avatar: 'test.png',
};

describe('validateProfileData.test', () => {
    test('sucess validate', () => {
        const result = validateProfileData(failedData);
        expect(result).toEqual([EValidationError.INCORRECT_USER_DATA]);
    });

    test('secondSucessValidate', () => {
        const result = validateProfileData(sucessData);
        expect(result).toEqual([]);
    });
});
