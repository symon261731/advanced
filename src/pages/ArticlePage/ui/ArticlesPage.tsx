import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, EArticleView, IArticle } from 'enteties/Article';

const ArticlesPage = memo(() => {
    const { t } = useTranslation('article');

    return (
        <div>
            <ArticleList
                articles={[]}
                view={EArticleView.BIG}
            />
        </div>
    );
});

export default ArticlesPage;
