import { EntityState } from '@reduxjs/toolkit';
import {
    EArticleView, IArticle, EArticleSortField, EArticleType,
} from 'enteties/Article';
import { TSortOrder } from 'shared/types/types';

export interface IArticlesPageSchema extends EntityState<IArticle>{
    isLoading?: boolean,
    error?: string,
    _inited: boolean,

    // Поля пагинации
    page: number,
    limit: number,
    hasMore: boolean,

    // поля сортировки
    order: TSortOrder,
    sort: EArticleSortField,
    search: string,
    view: EArticleView,
    type: EArticleType

}
