import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { articlePageActions } from 'pages/ArticlesPage/model/slice/articlePageSlice';
import { TSortOrder } from 'shared/types/types';
import { EArticleSortField, EArticleType } from 'enteties/Article';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { getArticleInited } from '../../selectors/getArticleSelectors';

interface IInitArticlesPageProps {
    searchParams: URLSearchParams;
}

export const initArticlesPage = createAsyncThunk<void, IInitArticlesPageProps, IThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async ({ searchParams }, extraThunk) => {
        const { dispatch, rejectWithValue, getState } = extraThunk;
        const isInit = getArticleInited(getState());

        try {
            if (!isInit) {
                const orderFromUrl = searchParams.get('order') as TSortOrder;
                const sortFromUrl = searchParams.get('sort') as EArticleSortField;
                const searchTextFromUrl = searchParams.get('search');
                const typeFromUrl = searchParams.get('type');

                if (orderFromUrl) {
                    dispatch(articlePageActions.setOrder(orderFromUrl));
                }
                if (sortFromUrl) {
                    dispatch(articlePageActions.setSortField(sortFromUrl));
                }
                if (searchTextFromUrl) {
                    dispatch(articlePageActions.setSearch(searchTextFromUrl));
                }
                if (typeFromUrl) {
                    dispatch(articlePageActions.setType(typeFromUrl as EArticleType));
                }

                dispatch(articlePageActions.initState());
                dispatch(fetchArticles({}));
            }
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
