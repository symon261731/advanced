import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'Feature/LoginForm',
    component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
    args: {},
};

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        (story) => ThemeDecorator(ETheme.DARK)(story),
    ],
};
