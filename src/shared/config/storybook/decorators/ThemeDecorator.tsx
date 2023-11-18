import { StoryFn } from '@storybook/react';
import { ETheme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: ETheme) => (Story: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>

);
