import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { ETheme } from 'app/providers/ThemeProvider';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'Enteties/CommentList',
    component: CommentList,
};

export default meta;

type Story = StoryObj<typeof CommentList>

const testArgs = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'testingUser',
            avatar: 'http://m.gettywallpapers.com/wp-content/uploads/2023/07/Kyouko-Hori-Profile-Picture.jpg',
        },
        text: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Consectetur ratione nihil quae 
        incidunt autem! Natus ab, labore porro soluta a in sapiente molestias. Veniam doloribus perspiciatis corrupti illum at dolor!`,
    },
    {
        id: '2',
        user: {
            id: '1',
            username: 'anotherBlaBlauser',
            avatar: 'http://m.gettywallpapers.com/wp-content/uploads/2023/07/Kyouko-Hori-Profile-Picture.jpg',
        },
        text: `Lorem ipsum dolor sit amet 
        consectetur adipisicing elit. Consectetur ratione nihil quae 
        incidunt autem! Natus ab, labore porro soluta a in sapiente molestias. Veniam doloribus perspiciatis corrupti illum at dolor!`,
    },
];

export const Primary: Story = {
    args: {
        comments: testArgs,
    },
};

export const Dark: Story = {
    args: {
        comments: testArgs,
    },
    decorators: [
        (story) => ThemeDecorator(ETheme.DARK)(story),
    ],
};

export const Purple: Story = {
    args: {
        comments: testArgs,
    },
    decorators: [
        (story) => ThemeDecorator(ETheme.PURPLE)(story),
    ],
};

export const Loading: Story = {
    args: {
        comments: testArgs,
        isLoading: true,
    },
};

export const empty: Story = {
    args: {
        comments: [],
    },
};
