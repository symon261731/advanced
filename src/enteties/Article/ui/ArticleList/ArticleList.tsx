import { classNames } from 'shared/helpers/classNames';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import classes from './ArticleList.module.scss';
import { EArticleView, IArticle } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

const getSkeleton = (view: EArticleView) => new Array(view === EArticleView.SMALL ? 9 : 3).fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton key={index} view={view} />
    ));
interface IProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view: EArticleView;
}

export const ArticleList = ({
    className, articles, isLoading, view,
} : IProps) => {
    const renderArticle = (article: IArticle) => <ArticleListItem key={article.id} article={article} view={view} />;

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
