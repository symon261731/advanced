import type { Meta, StoryObj } from '@storybook/react';

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
