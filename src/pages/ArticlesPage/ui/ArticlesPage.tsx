import { memo, useCallback } from 'react';
import { ArticleList } from 'enteties/Article';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlePageReducer, getArticles } from '../model/slice/articlePageSlice';
import { getArticleIsLoading, getArticleError, getArticleView } from '../model/selectors/getArticleSelectors';
import { ArticlePageFilters } from './ArticlePageFilters/ArticlePageFilters';

const reducers: TReducerList = { articlesPage: articlePageReducer };

const ArticlesPage = memo(() => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);

    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticleView);

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage({ searchParams }));
    });

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper onScrollEnd={onLoadNextPart}>
                <div>
                    <ArticlePageFilters />
                    <ArticleList
                        articles={articles}
                        isLoading={isLoading}
                        view={view}
                    />
                </div>
            </PageWrapper>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
