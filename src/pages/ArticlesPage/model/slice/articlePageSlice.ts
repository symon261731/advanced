import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    EArticleView, IArticle, EArticleType, EArticleSortField,
} from 'enteties/Article';
import { IStateSchema } from 'app/providers/StoreProvider';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { TSortOrder } from 'shared/types/types';
import { fetchArticles } from '../services/fetchArticles/fetchArticles';
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
        page: 1,
        hasMore: true,
        _inited: false,

        // Сортировка
        limit: 9,
        view: EArticleView.BIG,
        sort: EArticleSortField.VIEWS,
        order: 'asc',
        search: '',
        type: EArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<EArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, state.view);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setSortField: (state, action: PayloadAction<EArticleSortField>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<TSortOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action:PayloadAction<EArticleType>) => {
            state.type = action.payload;
        },

        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as EArticleView || EArticleView.BIG;
            state.view = view;
            state.limit = view === EArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.isLoading = false;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                    state.hasMore = action.payload?.length >= state.limit;
                }
            });
    },
});

export const {
    reducer: articlePageReducer,
    actions: articlePageActions,
} = articleDetailsCommentsSlice;
