import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<IStateSchema>) => (Story:StoryFn) => (
    <StoreProvider initialState={state as IStateSchema}>
        <Story />
    </StoreProvider>
);
