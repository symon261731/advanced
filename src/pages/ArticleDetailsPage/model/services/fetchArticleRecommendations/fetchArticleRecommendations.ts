import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IArticle } from 'enteties/Article';

export const fetchArticleRecommendations = createAsyncThunk<
    IArticle[],
    void,
    IThunkConfig<string>
    >(
        'articleDetails/fetchArticleRecommendations',
        async (_, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                const response = await extra.api.get<IArticle[]>('/articles', {
                    params: {
                        _limit: 4,
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
