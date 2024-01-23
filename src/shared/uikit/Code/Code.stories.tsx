import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { ETheme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'Shared/Code',
    component: Code,
};

export default meta;

type Story = StoryObj<typeof Code>

export const Primary: Story = {
    args: {
        text: `
        <!DOCTYPE html>\n
        <html>\n 
        <body>\n    
        <p id="hello"></p>\n
        \n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;`,
    },
};

export const Dark: Story = {
    args: {
        text: `
        <!DOCTYPE html>\n
        <html>\n 
        <body>\n    
        <p id="hello"></p>\n
        \n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;`,
    },
    decorators: [(story) => ThemeDecorator(ETheme.DARK)(story)],
};
