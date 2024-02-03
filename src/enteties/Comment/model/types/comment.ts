import { IUser } from 'enteties/User';

export interface IComment {
    id: string;
    user: IUser;
    text: string;
}
