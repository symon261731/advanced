import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'Shared/Loader',
    component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>

export const Primary: Story = {

};

export const PrimaryDark: Story = {
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};
