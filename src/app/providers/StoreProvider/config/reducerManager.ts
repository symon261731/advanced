import {
    AnyAction, Reducer, ReducersMapObject, combineReducers,
} from '@reduxjs/toolkit';
import {
    IReducerManager, IStateSchema, TStateSchemaKey,
} from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<IStateSchema>): IReducerManager {
    // Create an object which maps keys to reducers
    const reducers = { ...initialReducers };

    // Create the initial combinedReducer
    let combinedReducers = combineReducers(reducers);

    // An array which is used to delete state keys when reducers are removed
    let keysToRemove: TStateSchemaKey[] = ['loginForm'];

    return {
        getReducerMap: () => reducers,
        // The root reducer function exposed by this object
        // This will be passed to the store
        reduce: (state: IStateSchema, action: AnyAction) => {
        // If any reducers have been removed, clean up their state first
            if (keysToRemove.length > 0) {
                state = { ...state };
                keysToRemove.forEach((key) => {
                    delete state[key];
                });

                keysToRemove = [];
            }

            // Delegate to the combined reducer
            return combinedReducers(state, action);
        },

        // Adds a new reducer with the specified key
        add: (key: TStateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            // Add the reducer to the reducer mapping
            reducers[key] = reducer;

            // Generate a new combined reducer
            combinedReducers = combineReducers(reducers);
        },

        // Removes a reducer with the specified key
        remove: (key: TStateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            // Remove it from the reducer mapping
            delete reducers[key];

            // Add the key to the list of keys to clean up
            keysToRemove.push(key);

            // Generate a new combined reducer
            combinedReducers = combineReducers(reducers);
        },
    };
}
