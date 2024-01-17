import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ETheme } from 'app/providers/ThemeProvider';
import { ECurrency } from 'enteties/Currency';
import avatar from 'assets/tests/test.png';
import { ECountry } from 'enteties/Country';
import { StoreDecorator } from 'shared/config/storybook';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
};

export default meta;

type Story = StoryObj<typeof ProfilePage>

export const Primary: Story = {
    args: {

    },
    decorators: [
        (story) => StoreDecorator({
            profile: {
                data: {
                    firstName: 'test',
                    lastName: 'test',
                    age: 13,
                    currency: ECurrency.EUR,
                    country: ECountry.Russia,
                    city: 'test',
                    username: 'test',
                    avatar,
                },
                form: {
                    firstName: 'test',
                    lastName: 'test',
                    age: 13,
                    currency: ECurrency.EUR,
                    country: ECountry.Russia,
                    city: 'test',
                    username: 'test',
                    avatar,
                },
                isLoading: false,
                readonly: true,
            },
        })(story),
    ],
};

export const PrimaryDark: Story = {
    args: {

    },
    decorators: [
        (story) => StoreDecorator({
            profile: {
                data: {
                    firstName: 'test',
                    lastName: 'test',
                    age: 13,
                    currency: ECurrency.EUR,
                    country: ECountry.Russia,
                    city: 'test',
                    username: 'test',
                    avatar,
                },
                form: {
                    firstName: 'test',
                    lastName: 'test',
                    age: 13,
                    currency: ECurrency.EUR,
                    country: ECountry.Russia,
                    city: 'test',
                    username: 'test',
                    avatar,
                },
                isLoading: false,
                readonly: true,
            },
        })(story),
        (story) => ThemeDecorator(ETheme.DARK)(story),
    ],
};

export const Loading: Story = {
    args: {
    },
    decorators: [
        (story) => StoreDecorator({
            profile: {
                isLoading: true,
            },
        })(story),
    ],
};
