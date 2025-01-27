import { classNames } from 'shared/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/uikit/Text/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import classes from './ArticleList.module.scss';
import { EArticleView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

const getSkeleton = (view: EArticleView) => new Array(view === EArticleView.SMALL ? 9 : 3).fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton key={index} view={view} />
    ));

interface IProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view: EArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleList = ({
    className, articles, isLoading, view, target,
} : IProps) => {
    const renderArticle = (article: IArticle) => <ArticleListItem target={target} key={article.id} article={article} view={view} />;
    const { t } = useTranslation();

    if (!articles?.length && !isLoading) {
        return (
            <div className={classNames('', {}, [className, classes[view]])}>
                <Text title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className, classes[view]])}>
            {articles?.length > 0 ? articles?.map((article) => renderArticle(article)) : null}
            {isLoading && (
                <div className={classNames('', {}, [className, classes[view]])}>
                    {getSkeleton(view)}
                </div>
            )}
        </div>
    );
};
