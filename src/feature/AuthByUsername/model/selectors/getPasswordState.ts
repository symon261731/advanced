import { IStateSchema } from 'app/providers/StoreProvider';

export const getPasswordState = ((state: IStateSchema) => state?.loginForm?.password);
