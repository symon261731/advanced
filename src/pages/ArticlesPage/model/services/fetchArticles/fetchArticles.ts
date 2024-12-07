import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'enteties/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQuaryParams';
import { EArticleType } from 'enteties/Article/model/types/article';
import {
    getArticleLimit,
    getArticleSortField,
    getArticleSortByValue,
    getArticleSearchText,
    getArticlePageNumber,
    getArticleType,
} from '../../selectors/getArticleSelectors';

interface IFetchArticleProps {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
    IArticle[],
    IFetchArticleProps,
    IThunkConfig<string>
>(
    'articlePageSlice/fetchArticles',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const page = getArticlePageNumber(getState());
        const limit = getArticleLimit(getState());
        const searchText = getArticleSearchText(getState());
        const sortByValue = getArticleSortByValue(getState());
        const sortField = getArticleSortField(getState());
        const type = getArticleType(getState());

        try {
            addQueryParams({
                sort: sortField, order: sortByValue, search: searchText, type,
            });
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sortByValue,
                    _order: sortField,
                    q: searchText ?? undefined,
                    type: type === EArticleType.ALL ? undefined : type,
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
