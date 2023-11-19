import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Shared/Input',
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>

export const Primary: Story = {
    args: {
        value: 'test',
    },
};

export const PrimaryDark: Story = {
    args: {
        value: 'test',
    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};
