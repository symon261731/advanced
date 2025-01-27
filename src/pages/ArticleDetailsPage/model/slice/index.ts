import { combineReducers } from '@reduxjs/toolkit';
import { IArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';

export const articleDetailsReducer = combineReducers<IArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
});
