import { ILoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('', () => {
    test('test set username', () => {
        const state: DeepPartial<ILoginSchema> = { username: 'user' };
        expect(loginReducer(state as ILoginSchema, loginActions.setUserName('userTest'))).toEqual({ username: 'userTest' });
    });

    test('test set password', () => {
        const state: DeepPartial<ILoginSchema> = { password: '123' };
        expect(loginReducer(state as ILoginSchema, loginActions.setUserPassword('123123'))).toEqual({ password: '123123' });
    });
});
