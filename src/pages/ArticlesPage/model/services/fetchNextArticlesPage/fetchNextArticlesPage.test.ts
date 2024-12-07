import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticles } from '../fetchArticles/fetchArticles';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticles/fetchArticles');
describe('fetchNextArticlesPage.test', () => {
    test('success', () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [1, 3, 45, 6, 7, 1],
                hasMore: true,
                entities: {},
            },
        });
        thunk.api.get.mockReturnValue(Promise.resolve());

        thunk.callThunk();

        expect(fetchArticles).toBeCalledTimes(1);
    });

    test('notHasMore', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
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
