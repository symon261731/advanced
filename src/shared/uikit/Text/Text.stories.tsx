import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { ETextSize, EThemeText, Text } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Shared/Text',
    component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'some information text',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title',
        text: 'some information text',
    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};

export const Error: Story = {
    args: {
        title: 'Error Title',
        text: 'error information text',
        theme: EThemeText.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Error Title',
        text: 'error information text',
        theme: EThemeText.ERROR,
    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};

export const SizeM: Story = {
    args: {
        title: 'Title',
        text: 'some information text',
        size: ETextSize.M,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'some information text',
        size: ETextSize.L,
    },
};

export const SizeXL: Story = {
    args: {
        title: 'Title',
        text: 'some information text',
        size: ETextSize.XL,
    },
};
