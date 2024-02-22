import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'enteties/Article';
import { getArticleLimit } from 'pages/ArticlesPage/model/selectors/getArticleSelectors';

interface IFetchArticlesArgs {
    page?: number
}

export const fetchArticles = createAsyncThunk<
    IArticle[],
    IFetchArticlesArgs,
    IThunkConfig<string>
>(
    'articlePageSlice/fetchArticles',
    async ({ page = 1 }, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;
        const limit = getArticleLimit(thunkApi.getState());

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
