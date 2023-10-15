import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react';

export const StyleDecorator = (Story: StoryFn) => (
    <div className="app light">
        <Story />
    </div>
);
