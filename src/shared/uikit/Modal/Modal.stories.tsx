import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { ETheme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'Shared/Modal',
    component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>

export const Primary: Story = {
    args: {
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Laboriosam suscipit amet minus saepe nobis? Obcaecati quos delectus atque sit? 
        Veniam magnam pariatur dignissimos mollitia eligendi qui magni, nobis quisquam explicabo!`,
        title: 'Модальное окно',
    },
};

export const Dark: Story = {
    args: {
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Laboriosam suscipit amet minus saepe nobis? Obcaecati quos delectus atque sit? 
        Veniam magnam pariatur dignissimos mollitia eligendi qui magni, nobis quisquam explicabo!`,
        title: 'Модальное окно',
    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};
