import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IComment } from 'enteties/Comment';
import { getUserData } from 'enteties/User';
import { getArticleDetailsData } from 'enteties/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForActicle = createAsyncThunk<
    IComment,
    string | undefined,
    IThunkConfig<string>
    >(
        'articleDetails/addCommentForActicle',
        async (text, thunkApi) => {
            const {
                extra, rejectWithValue, getState, dispatch,
            } = thunkApi;

            const userData = getUserData(getState());
            const currentArticle = getArticleDetailsData(getState());

            if (!userData || !text || !currentArticle) {
                return rejectWithValue('no data');
            }

            try {
                const response = await extra.api.post<IComment>('/comments', {
                    articleId: currentArticle.id,
                    userId: userData.id,
                    text,
                });

                if (!response.data) {
                    throw new Error();
                }

                dispatch(fetchCommentsByArticleId(currentArticle.id));

                return response.data;
            } catch (e) {
                return rejectWithValue('error');
            }
        },
    );
