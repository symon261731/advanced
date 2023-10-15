import { StoryFn } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ETheme) => (Story: StoryFn) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
