import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'enteties/User';
import { loginReducer } from 'feature/AuthByUsername';
import { IStateSchema } from './StateSchema';

export function createReduxStore(initialState?: IStateSchema) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
