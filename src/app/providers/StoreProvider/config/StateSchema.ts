import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { IUserSchema } from 'enteties/User';
import { ILoginSchema } from 'feature/AuthByUsername';

export interface IStateSchema {
    user: IUserSchema;

    // async redusers
    loginForm?: ILoginSchema;
}

export type TStateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>,
    reduce: (state: IStateSchema, action: AnyAction)=> CombinedState<IStateSchema>,
    add: (key: TStateSchemaKey, reducer: Reducer)=> void,
    remove: (key: TStateSchemaKey)=> void,
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager,
}
