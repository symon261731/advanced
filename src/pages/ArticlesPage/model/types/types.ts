import { EntityState } from '@reduxjs/toolkit';
import { EArticleView, IArticle } from 'enteties/Article';

export interface IArticlesPageSchema extends EntityState<IArticle>{

    isLoading?: boolean,
    error?: string,
    view: EArticleView,
    page: number,
    limit?: number,
    hasMore: boolean,
}
