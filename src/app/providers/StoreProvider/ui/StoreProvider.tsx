import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { IStateSchema } from '../config/StateSchema';

interface IProps {
 children: ReactNode;
 initialState?: IStateSchema
}

export const StoreProvider = ({ children, initialState }:IProps) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
