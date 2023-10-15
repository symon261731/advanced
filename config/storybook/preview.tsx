import type { Preview } from '@storybook/react';
// import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

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
        // (Story) => (
        //     StyleDecorator(Story)
        // ),
        (Story) => (
            ThemeDecorator(ETheme.LIGHT)(Story)
        ),
    ],
};

export default preview;
