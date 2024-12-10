import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { IArticleDetailsSchema } from 'enteties/Article';
import { IProfileSchema } from 'enteties/Profile';
import { IUserSchema } from 'enteties/User';
import { IAddCommentFormSchema } from 'feature/AddComment';
import { ILoginSchema } from 'feature/AuthByUsername';
import { IArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { NavigateOptions, To } from 'react-router-dom';
import { IArticlesPageSchema } from 'pages/ArticlesPage';
import { IScrollSaveSchema } from 'feature/ScrollSave';

export interface IStateSchema {
    user: IUserSchema;
    scrollPosition: IScrollSaveSchema;

    // async redusers
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    articleDetails?: IArticleDetailsSchema;
    articleDetailsPage?: IArticleDetailsPageSchema;
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
