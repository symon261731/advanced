export interface IUser {
    id: string;
    username: string;
}

export interface IUserSchema {
    authData?: IUser;
    // не менять
    _inited: boolean;
}
