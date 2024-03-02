import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config/StateSchema';

interface IProps {
 children: ReactNode;
 initialState?: DeepPartial<IStateSchema>;
 asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }:IProps) => {
    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
