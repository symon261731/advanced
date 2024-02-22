import { IStateSchema } from 'app/providers/StoreProvider';
import { EArticleView } from 'enteties/Article';

export const getArticleIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading;
export const getArticleError = (state: IStateSchema) => state.articlesPage?.error;

export const getArticleView = (state: IStateSchema) => state.articlesPage?.view || EArticleView.SMALL;
export const getArticleLimit = (state: IStateSchema) => state.articlesPage?.limit || 9;
export const getArticlePageNumber = (state: IStateSchema) => state.articlesPage?.page || 1;
export const getArticleHasMore = (state: IStateSchema) => state.articlesPage?.hasMore || false;
export const getArticleInited = (state: IStateSchema) => state.articlesPage?._inited;
