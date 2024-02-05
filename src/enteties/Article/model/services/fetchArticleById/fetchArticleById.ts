import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    IArticle,
    string,
    IThunkConfig<string>>(
        'articleDetails/fetchArticleById',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const responce = await extra.api.get<IArticle>(`/articles/${articleId}`);

                if (!responce.data) {
                    throw new Error();
                }

                return responce.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },

    );
