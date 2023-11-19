import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'enteties/User';
import { IStateSchema } from './StateSchema';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        user: userReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
