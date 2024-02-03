import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'enteties/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    IComment[],
    string | undefined,
    IThunkConfig<string>
    >(
        'articleDetails/fetchCommentsByArticleId',
        async (articleId, thunkApi) => {
            const { extra, rejectWithValue } = thunkApi;

            try {
                if (articleId === undefined) {
                    return rejectWithValue('error');
                }

                const response = await extra.api.get<IComment[]>('/comments', {
                    params: {
                        articleId,
                        _expand: 'user',
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
