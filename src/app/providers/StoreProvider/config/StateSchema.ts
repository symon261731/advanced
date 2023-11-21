import { IUserSchema } from 'enteties/User';
import { ILoginSchema } from 'feature/AuthByUsername';

export interface IStateSchema {
    user: IUserSchema;
    loginForm?: ILoginSchema;
}
