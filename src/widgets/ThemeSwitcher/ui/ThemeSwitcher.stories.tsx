import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'themeSwitcher',
    component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>

export const Primary: Story = {
    args: {
        themeForStorybook: ETheme.DARK,
    },
};

export const PrimaryDark: Story = {
    args: {
        themeForStorybook: ETheme.LIGHT,
    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};
