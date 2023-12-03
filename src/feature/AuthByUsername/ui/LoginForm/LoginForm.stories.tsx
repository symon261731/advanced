import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'Feature/LoginForm',
    component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>

export const Primary: Story = {
    args: { isOpen: true },
};

export const PrimaryDark: Story = {
    args: { isOpen: true },
    decorators: [
        (story) => ThemeDecorator(ETheme.DARK)(story),
    ],
};
