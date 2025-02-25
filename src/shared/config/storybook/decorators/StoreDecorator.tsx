import { ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { IStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { articleDetailsReducer } from 'enteties/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'feature/EditableProfileCard';
import { addCommentFormReducer } from 'feature/AddComment/model/slice/addCommentSlice';
import { loginReducer } from 'feature/AuthByUsername/model/slice/loginSlice';
import { TReducerList } from 'shared/lib/components/DynamicModuleLoader';

const defaultAsyncReducers: TReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addNewCommentForm: addCommentFormReducer,
};

export const StoreDecorator = (
    state: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>,
) => (Story:StoryFn) => (
    <StoreProvider initialState={state as IStateSchema} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
    </StoreProvider>
);
