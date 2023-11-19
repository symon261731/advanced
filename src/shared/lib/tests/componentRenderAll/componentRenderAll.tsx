import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTest';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export interface IComponentRenderAllOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>
}

export function componentRenderAll(component: ReactNode, options: IComponentRenderAllOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    const store = createReduxStore(initialState as IStateSchema);

    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </Provider>,
    );
}
