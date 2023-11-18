import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { ETheme } from 'app/providers/ThemeProvider';
import { AppLink, TAppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'Shared/AppLink',
    component: AppLink,
};

export default meta;

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
    args: {
        children: 'link',
        theme: TAppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'link',
        theme: TAppLinkTheme.PRIMARY,

    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};
