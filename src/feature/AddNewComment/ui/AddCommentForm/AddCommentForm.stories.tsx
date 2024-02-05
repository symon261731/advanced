import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'Feature/AddComment',
    component: AddCommentForm,
};

export default meta;

type Story = StoryObj<typeof AddCommentForm>

export const Primary: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        (story) => ThemeDecorator(ETheme.DARK)(story),
    ],
};

export const Purple: Story = {
    args: {},
    decorators: [
        (story) => ThemeDecorator(ETheme.PURPLE)(story),
    ],
};
