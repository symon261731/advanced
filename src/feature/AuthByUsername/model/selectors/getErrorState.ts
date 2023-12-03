import { IStateSchema } from 'app/providers/StoreProvider';

export const getErrorState = ((state: IStateSchema) => state?.loginForm?.error);
