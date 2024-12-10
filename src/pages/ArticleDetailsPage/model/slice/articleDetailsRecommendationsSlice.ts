import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/StoreProvider';
import { IArticle } from 'enteties/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { IArticleDetailsRecommentationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<IStateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendations',
    initialState: recommendationsAdapter.getInitialState<IArticleDetailsRecommentationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action);
            });
    },
});

export const {
    actions: articleDetailsRecommendationsActions,
    reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice;
