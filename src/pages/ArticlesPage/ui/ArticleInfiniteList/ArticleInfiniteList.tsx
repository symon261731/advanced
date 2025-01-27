import { useSelector } from 'react-redux';
import { ArticleList } from 'enteties/Article';
import { getArticleError, getArticleIsLoading, getArticleView } from '../../model/selectors/getArticleSelectors';
import { getArticles } from '../../model/slice/articlePageSlice';

export const ArticleInfiniteList = () => {
    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);

    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticleView);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view}
        />
    );
};
