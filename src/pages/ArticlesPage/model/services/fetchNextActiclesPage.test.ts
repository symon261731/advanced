import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles';
import { fetchNextActiclesPage } from './fetchNextActiclesPage';

jest.mock('./fetchArticles');
describe('fetchNextArticlesPage.test', () => {
    test('success', () => {
        const thunk = new TestAsyncThunk(fetchNextActiclesPage, {
            articlesPage: {
                page: 2,
                ids: [1, 3, 45, 6, 7, 1],
                hasMore: true,
                entities: {},
            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve());

        thunk.callThunk();

        expect(fetchArticles).toHaveBeenCalledWith({
            page: 3,
        });
    });

    test('notHasMore', async () => {
        const thunk = new TestAsyncThunk(fetchNextActiclesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                hasMore: false,
                isLoading: false,
                entities: {},
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
    });
});
