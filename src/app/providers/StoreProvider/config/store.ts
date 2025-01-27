import {
    CombinedState, Reducer, ReducersMapObject, configureStore,
} from '@reduxjs/toolkit';
import { userReducer } from 'enteties/User';
import { $api } from 'shared/api/api';
import { scrollSaveReducer } from 'feature/ScrollSave';
import { rtkApi } from 'shared/api/rtkApi';
import { IStateSchema, IThunkExtraArgs } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        user: userReducer,
        scrollPosition: scrollSaveReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: IThunkExtraArgs = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
