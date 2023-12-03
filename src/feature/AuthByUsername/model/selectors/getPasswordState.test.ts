import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { getPasswordState } from './getPasswordState';

describe('getPasswordState.test', () => {
    test('should return value of state', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getPasswordState(state as IStateSchema)).toEqual('123');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<IStateSchema> = {};
        expect(getPasswordState(state as IStateSchema)).toEqual(undefined);
    });
});
