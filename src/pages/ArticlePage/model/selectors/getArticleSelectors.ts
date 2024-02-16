import { IStateSchema } from 'app/providers/StoreProvider';
import { EArticleView } from 'enteties/Article';

export const getArticleIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading;
export const getArticleError = (state: IStateSchema) => state.articlesPage?.error;

export const getArticleView = (state: IStateSchema) => state.articlesPage?.view || EArticleView.SMALL;
