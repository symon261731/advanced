import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import type { Meta, StoryObj } from '@storybook/react';
import { ETheme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'Shared/Select',
    component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>

export const Primary: Story = {
    args: {
        label: '123',
        options: [
            { value: '123', content: 'testContent' },
            { value: '4565', content: 'secondTestContent' }],
        value: '4565',
    },
};

export const PrimaryDark: Story = {
    args: {
        label: '123',
        options: [
            { value: '123', content: 'testContent' },
            { value: '4565', content: 'secondTestContent' }],
        value: '4565',
    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};
