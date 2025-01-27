import { memo, useCallback } from 'react';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlePageReducer } from '../model/slice/articlePageSlice';
import { ArticlePageFilters } from './ArticlePageFilters/ArticlePageFilters';
import { ArticleInfiniteList } from './ArticleInfiniteList/ArticleInfiniteList';

const reducers: TReducerList = { articlesPage: articlePageReducer };

const ArticlesPage = memo(() => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage({ searchParams }));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageWrapper onScrollEnd={onLoadNextPart}>
                <ArticlePageFilters />
                <ArticleInfiniteList />
            </PageWrapper>
        </DynamicModuleLoader>
    );
});

export default ArticlesPage;
