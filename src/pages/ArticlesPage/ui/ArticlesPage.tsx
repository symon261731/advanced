import { memo, useCallback } from 'react';
import { ArticleList, ArticleViewSelect, EArticleView } from 'enteties/Article';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { PageWrapper } from 'shared/uikit/PageWrapper/PageWrapper';
import { fetchNextActiclesPage } from '../model/services/fetchNextActiclesPage';
import { articlePageActions, articlePageReducer, getArticles } from '../model/slice/articlePageSlice';
import { fetchArticles } from '../model/services/fetchArticles';
import {
    getArticleIsLoading, getArticleError, getArticleView, getArticlePageNumber, getArticleHasMore,
} from '../model/selectors/getArticleSelectors';
import classes from './ArticlesPage.module.scss';

const reducers: TReducerList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = memo(() => {
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);
    const view = useSelector(getArticleView);
    const articles = useSelector(getArticles.selectAll);

    const onChangeView = (newView: EArticleView) => {
        dispatch(articlePageActions.setView(newView));
    };

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextActiclesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticles({ page: 1 }));
    });

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <PageWrapper onScrollEnd={onLoadNextPart}>
                <ArticleViewSelect view={view} onClick={onChangeView} className={classes.viewSelect} />
                <div>
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
