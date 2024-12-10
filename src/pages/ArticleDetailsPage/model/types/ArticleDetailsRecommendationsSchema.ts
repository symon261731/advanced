import { EntityState } from '@reduxjs/toolkit';
import { IArticle } from 'enteties/Article';

export interface IArticleDetailsRecommentationsSchema extends EntityState<IArticle>{
        isLoading?: boolean;
        error?: string;
        ids: string[];
}
