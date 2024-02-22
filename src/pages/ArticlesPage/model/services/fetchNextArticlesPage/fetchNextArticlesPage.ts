import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { articlePageActions } from '../../slice/articlePageSlice';
import {
    getArticleHasMore,
    getArticleIsLoading,
    getArticleLimit,
    getArticlePageNumber,
} from '../../selectors/getArticleSelectors';

export const fetchNextArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const hasMore = getArticleHasMore(getState());
        const limit = getArticleLimit(getState());
        const page = getArticlePageNumber(getState());
        const isLoading = getArticleIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(fetchArticles({ page: page + 1 }));
            dispatch(articlePageActions.setPage(page + 1));
        }
    },
);
