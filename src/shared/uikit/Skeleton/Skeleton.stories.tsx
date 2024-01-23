import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { ETheme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Shared/Skeleton',
    component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {

};

export const Dark: Story = {

    decorators: [
        (story) => ThemeDecorator(ETheme.DARK)(story),
    ],
};

export const Purple: Story = {
    decorators: [
        (story) => ThemeDecorator(ETheme.PURPLE)(story),
    ],
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: '100%',
        height: 200,
    },
};
