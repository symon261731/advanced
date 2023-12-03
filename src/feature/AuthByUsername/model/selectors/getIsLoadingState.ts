import { IStateSchema } from 'app/providers/StoreProvider';

export const getIsLoadingState = ((state: IStateSchema) => state?.loginForm?.isLoading);
