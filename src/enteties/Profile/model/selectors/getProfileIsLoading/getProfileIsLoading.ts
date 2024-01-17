import { IStateSchema } from 'app/providers/StoreProvider';

export const getIsProfileIsLoading = (state: IStateSchema) => state.profile?.isLoading || false;
