import { combineReducers } from '@reduxjs/toolkit';
import { IArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';

export const articleDetailsReducer = combineReducers<IArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
