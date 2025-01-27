import { ECountry } from 'enteties/Country';
import { ECurrency } from 'enteties/Currency';
import { EValidationError, IProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice.test', () => {
    test('setReadonly', () => {
        const state: DeepPartial<IProfileSchema> = {
            error: undefined,
            readonly: true,
        };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.setReadonly(false),
        )).toEqual({
            error: undefined,
            readonly: false,
        });
    });

    test('cancelEdit', () => {
        const state: DeepPartial<IProfileSchema> = {
            form: {
                firstName: '',
                lastName: '',
                username: 'testUser',
                age: 55,
                currency: ECurrency.RUB,
                country: ECountry.Russia,
                city: 'Москва',
                avatar: 'test.png',
            },
            data: {
                firstName: '123',
                lastName: '123',
                username: 'testUser',
                age: 55,
                currency: ECurrency.RUB,
                country: ECountry.Russia,
                city: 'Москва',
                avatar: 'test.png',
            },
            readonly: false,
            validateError: [],
        };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            data: {
                firstName: '123',
                lastName: '123',
                username: 'testUser',
                age: 55,
                currency: ECurrency.RUB,
                country: ECountry.Russia,
                city: 'Москва',
                avatar: 'test.png',
            },
            form: {
                firstName: '123',
                lastName: '123',
                username: 'testUser',
                age: 55,
                currency: ECurrency.RUB,
                country: ECountry.Russia,
                city: 'Москва',
                avatar: 'test.png',
            },
            readonly: true,
            validateError: undefined,
        });
    });

    test('updateProfile', () => {
        const state: DeepPartial<IProfileSchema> = {
            form: {
                firstName: '123',
                lastName: '123',
                username: 'testUser',
                age: 55,
                currency: ECurrency.RUB,
                country: ECountry.Russia,
                city: 'Москва',
                avatar: 'test.png',
            },
            readonly: false,
            validateError: [],
        };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.updateProfile({ firstName: 'test' }),
        )).toEqual({
            form: {
                firstName: 'test',
                lastName: '123',
                username: 'testUser',
                age: 55,
                currency: ECurrency.RUB,
                country: ECountry.Russia,
                city: 'Москва',
                avatar: 'test.png',
            },
            readonly: false,
            validateError: undefined,
        });
    });

    test('test update profile service pending', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false,
            validateError: [EValidationError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as IProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            validateError: undefined,
            isLoading: true,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
            validateError: undefined,

        };

        const testData = {
            firstName: 'test',
            lastName: '123',
            username: 'testUser',
            age: 55,
            currency: ECurrency.RUB,
            country: ECountry.Russia,
            city: 'Москва',
            avatar: 'test.png',
        };

        expect(profileReducer(
            state as IProfileSchema,
            updateProfileData.fulfilled(testData, ''),
        )).toEqual({
            validateError: undefined,
            isLoading: false,
            form: testData,
            data: testData,
        });
    });

    test('test update profileService rejected', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
            validateError: undefined,

        };

        expect(profileReducer(
            state as IProfileSchema,
            updateProfileData.rejected(null, '', undefined, [EValidationError.SERVER_ERROR]),
        )).toEqual({
            validateError: [EValidationError.SERVER_ERROR],
            isLoading: false,
        });
    });
});
