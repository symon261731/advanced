import { StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const BrowserRouterDecorator = (Story: StoryFn) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
