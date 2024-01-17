import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { ECurrency } from 'enteties/Currency';
import avatar from 'assets/tests/test.png';
import { ECountry } from 'enteties/Country';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'Enteties/ProfileCard',
    component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>

export const Primary: Story = {
    args: {
        data: {
            firstName: 'test',
            lastName: 'test2',
            username: 'testUser',
            age: 55,
            currency: ECurrency.RUB,
            country: ECountry.Russia,
            city: 'Москва',
            avatar,
        },
    },
};

export const PrimaryDark: Story = {
    args: {
        data: {
            firstName: 'test',
            lastName: 'test2',
            username: 'testUser',
            age: 55,
            currency: ECurrency.RUB,
            country: ECountry.Russia,
            city: 'Москва',
            avatar,
        },
    },
    decorators: [
        (story) => ThemeDecorator(ETheme.DARK)(story),
    ],
};

export const WithErrors: Story = {
    args: {
        error: 'true',
    },
};

export const WithErrorsDark: Story = {
    args: {
        error: 'true',
    },
    decorators: [
        (story) => ThemeDecorator(ETheme.DARK)(story),
    ],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
