import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Widgets/Navbar',
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>

export const Primary: Story = {
    args: {},
};

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        (story) => ThemeDecorator(ETheme.DARK)(story),
    ],
};
