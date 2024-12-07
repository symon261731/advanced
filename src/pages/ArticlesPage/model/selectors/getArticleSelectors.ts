import { IStateSchema } from 'app/providers/StoreProvider';
import { EArticleView } from 'enteties/Article';
import { EArticleSortField, EArticleType } from 'enteties/Article/model/types/article';

export const getArticleIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading;
export const getArticleError = (state: IStateSchema) => state.articlesPage?.error;

export const getArticleView = (state: IStateSchema) => state.articlesPage?.view || EArticleView.SMALL;

// состояния сортировки статей
export const getArticleSearchText = (state: IStateSchema) => state.articlesPage?.search || '';
export const getArticleSortField = (state: IStateSchema) => state.articlesPage?.sort || EArticleSortField.VIEWS;
export const getArticleSortByValue = (state:IStateSchema) => state.articlesPage?.order || 'asc';
export const getArticleType = (state:IStateSchema) => state.articlesPage?.type || EArticleType.ALL;

// состояния пагинации статей
export const getArticleLimit = (state: IStateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageNumber = (state: IStateSchema) => state.articlesPage?.page || 1;
export const getArticleHasMore = (state: IStateSchema) => state.articlesPage?.hasMore || false;
export const getArticleInited = (state: IStateSchema) => state.articlesPage?._inited;
