import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { articlePageActions } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { getArticleInited } from '../../selectors/getArticleSelectors';

export const initArticlesPage = createAsyncThunk<void, void, IThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, extraThunk) => {
        const { dispatch, rejectWithValue, getState } = extraThunk;

        const isInit = getArticleInited(getState());

        try {
            if (!isInit) {
                dispatch(articlePageActions.initState());
                dispatch(fetchArticles({ page: 1 }));
            }
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
