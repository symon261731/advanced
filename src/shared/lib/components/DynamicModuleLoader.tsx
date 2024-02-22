import { Reducer } from '@reduxjs/toolkit';
import { IReduxStoreWithManager } from 'app/providers/StoreProvider';
import { TStateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type TReducerList = {
    [name in TStateSchemaKey]?: Reducer;
}

interface IProps {
    children: ReactNode;
    reducers: TReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IProps> = (props:IProps) => {
    const {
        children, reducers, removeAfterUnmount = true,
    } = props;
    const dispatch = useDispatch();

    const store = useStore() as IReduxStoreWithManager;

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        const mountedReducers = Object.keys(store.reducerManager.getReducerMap());
        Object.entries(reducers).forEach(([name, reducer]) => {
            if (!mountedReducers.some((mountReducerName) => mountReducerName === name)) {
                store.reducerManager.add(name as TStateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        if (removeAfterUnmount) {
            return () => {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as TStateSchemaKey);
                    dispatch({ type: `@REMOVE ${name} reducer` });
                });
            };
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
