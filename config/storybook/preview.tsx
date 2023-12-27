import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ETheme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator, StyleDecorator, StoreDecorator,
} from '../../src/shared/config/storybook';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            StyleDecorator(Story)
        ),
        (Story) => (
            ThemeDecorator(ETheme.LIGHT)(Story)
        ),
        (Story) => (
            <BrowserRouter>
                {StoreDecorator({
                    user: { authData: { id: '1', username: 'admin' } },
                })(Story)}
            </BrowserRouter>
        ),
    ],
};

export default preview;
