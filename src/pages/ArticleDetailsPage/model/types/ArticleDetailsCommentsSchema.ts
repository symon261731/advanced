import { EntityState } from '@reduxjs/toolkit';
import { IComment } from 'enteties/Comment/model/types/comment';

export interface IArticleDetailsCommentsSchema extends EntityState<IComment>{
    isLoading?: boolean;
    error?: string;
    ids: string[];
}
