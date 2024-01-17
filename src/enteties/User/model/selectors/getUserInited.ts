import { IStateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line no-underscore-dangle
export const getUserInited = (state: IStateSchema) => state.user._inited || false;
