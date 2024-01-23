import { IStateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: IStateSchema) => state.articleDetails?.data || undefined;
export const getArticleDetailsIsLoading = (state: IStateSchema) => state.articleDetails?.isLoading || false;
export const getArticleDetailsError = (state:IStateSchema) => state.articleDetails?.error || undefined;
