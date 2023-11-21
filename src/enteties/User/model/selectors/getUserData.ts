import { IStateSchema } from 'app/providers/StoreProvider';

export const getUserData = (state:IStateSchema) => state.user.authData;
