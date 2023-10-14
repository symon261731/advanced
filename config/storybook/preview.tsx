import type { Preview } from '@storybook/react';
import React from 'react';
import '../../src/app/styles/index.scss';

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
            <div className="app light">
                <Story />
            </div>
        ),
    ],
};

export default preview;
