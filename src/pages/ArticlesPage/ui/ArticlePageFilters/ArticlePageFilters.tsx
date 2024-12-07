/* eslint-disable i18next/no-literal-string */
import { memo, useCallback } from 'react';
import {
    ArticleViewSelect,
    EArticleView,
    EArticleSortField,
    EArticleType,
} from 'enteties/Article';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ArticleSortSelector } from 'enteties/Article/ui/ArticleSortSelector/ArticleSortSelector';
import { Input } from 'shared/uikit/Input/Input';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/uikit/Card/Card';
import { TSortOrder } from 'shared/types/types';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTabs } from 'enteties/Article/ui/ArticalTabs/ArticleTabs';
import { articlePageActions } from '../../model/slice/articlePageSlice';
import {
    getArticleSearchText,
    getArticleSortByValue,
    getArticleSortField,
    getArticleView,
    getArticleType,
} from '../../model/selectors/getArticleSelectors';
import classes from './ArticlePageFilters.module.scss';
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles';

export const ArticlePageFilters = memo(() => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const view = useSelector(getArticleView);
    const searchText = useSelector(getArticleSearchText);
    const sortByValue = useSelector(getArticleSortByValue);
    const sortField = useSelector(getArticleSortField);
    const type = useSelector(getArticleType);

    const fetchArticleData = useCallback(() => {
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const debounceFetchArticleData = useDebounce(fetchArticleData, 300);

    const onChangeView = (newView: EArticleView) => {
        dispatch(articlePageActions.setView(newView));
    };

    const onChangeSearchText = (text: string) => {
        dispatch(articlePageActions.setSearch(text));
        dispatch(articlePageActions.setPage(1));
        debounceFetchArticleData();
    };

    const onChangeSortBy = (newValue: TSortOrder) => {
        dispatch(articlePageActions.setOrder(newValue));
        dispatch(articlePageActions.setPage(1));
        fetchArticleData();
    };

    const onChangeSortField = (newValue: EArticleSortField) => {
        dispatch(articlePageActions.setSortField(newValue));
        dispatch(articlePageActions.setPage(1));
        fetchArticleData();
    };

    const onChangeType = (newTab: EArticleType) => {
        dispatch(articlePageActions.setType(newTab));
        dispatch(articlePageActions.setPage(1));
        fetchArticleData();
    };

    return (
        <div className={classes.ArticlePageFilters}>
            <div className={classes.filtersSection}>
                <ArticleSortSelector
                    onChangeSortBy={onChangeSortBy}
                    onChangeSortField={onChangeSortField}
                    sortByValue={sortByValue}
                    sortFieldValue={sortField}
                />
                <ArticleViewSelect view={view} onClick={onChangeView} />
            </div>
            <Card className={classes.searchSection}>
                <Input
                    placeholder={t('Поиск')}
                    value={searchText}
                    onChange={onChangeSearchText}
                />
            </Card>
            <ArticleTabs value={type} onChangeType={onChangeType} />
        </div>
    );
});

ArticlePageFilters.displayName = 'ArticlePageFilters';
