import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { IArticleDetailsSchema } from 'enteties/Article';
import { IProfileSchema } from 'enteties/Profile';
import { IUserSchema } from 'enteties/User';
import { IAddCommentFormSchema } from 'feature/AddNewComment';
import { ILoginSchema } from 'feature/AuthByUsername';
import { IArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { NavigateOptions, To } from 'react-router-dom';
import { IArticlesPageSchema } from 'pages/ArticlesPage';

export interface IStateSchema {
    user: IUserSchema;

    // async redusers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    articleDetailsComments?: IArticleDetailsCommentsSchema;
    addNewCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlesPageSchema,
}

export type TStateSchemaKey = keyof IStateSchema;
export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>,
    reduce: (state: IStateSchema, action: AnyAction)=> CombinedState<IStateSchema>,
    add: (key: TStateSchemaKey, reducer: Reducer)=> void,
    remove: (key: TStateSchemaKey)=> void,
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager,
}

export interface IThunkExtraArgs {
    api: AxiosInstance,
    navigate?: (to:To, options?: NavigateOptions) => void,
}

export interface IThunkConfig<T> {
    rejectValue: T,
    extra: IThunkExtraArgs,
    state: IStateSchema
}
