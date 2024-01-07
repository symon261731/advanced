import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Shared/Avatar',
    component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
    args: {
        src: 'http://m.gettywallpapers.com/wp-content/uploads/2023/07/Kyouko-Hori-Profile-Picture.jpg',
        alt: 'avatar',
        size: 300,
    },
};

export const Small: Story = {
    args: {
        src: 'http://m.gettywallpapers.com/wp-content/uploads/2023/07/Kyouko-Hori-Profile-Picture.jpg',
        alt: 'avatar',
        size: 50,
    },
};
