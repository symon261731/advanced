import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EArticleView, IArticle } from 'enteties/Article';
import { IStateSchema } from 'app/providers/StoreProvider';
import { fetchArticles } from '../services/fetchArticles';
import { IArticlesPageSchema } from '../types/types';

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: EArticleView.BIG,
    }),
    reducers: {
        setView: (state, action: PayloadAction<EArticleView>) => {
            state.view = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action);
            });
    },
});

export const {
    reducer: articlePageReducer,
    actions: articlePageActions,
} = articleDetailsCommentsSlice;
