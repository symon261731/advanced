import { ArticleDetails } from 'enteties/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticlesPage = memo(() => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    return (
        <div>1234567890</div>
    );
});

export default ArticlesPage;
