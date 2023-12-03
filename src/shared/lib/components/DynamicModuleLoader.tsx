import { Reducer } from '@reduxjs/toolkit';
import { IReduxStoreWithManager } from 'app/providers/StoreProvider';
import { TStateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type TReducerList = {
    [name in TStateSchemaKey]?: Reducer;
}

type TReducerListEntry = [TStateSchemaKey, Reducer];

interface IProps {
    children: ReactNode;
    reducers: TReducerList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<IProps> = (props:IProps) => {
    const {
        children, reducers, removeAfterUnmount,
    } = props;
    const dispatch = useDispatch();

    const store = useStore() as IReduxStoreWithManager;

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: TReducerListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        if (removeAfterUnmount) {
            return () => {
                Object.entries(reducers).forEach(([name]: TReducerListEntry) => {
                    store.reducerManager.remove(name);
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
