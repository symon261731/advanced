import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: 'Кнопка',

    },
};

export const Clear:Story = {
    args: {
        children: 'Кнопка',
        theme: ThemeButton.CLEAR,
    },
};

export const ClearDark:Story = {
    args: {
        children: 'Кнопка',
        theme: ThemeButton.CLEAR,
    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};

export const Outline:Story = {
    args: {
        children: 'Кнопка',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Кнопка',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};
