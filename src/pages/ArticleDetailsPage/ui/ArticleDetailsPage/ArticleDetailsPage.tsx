import { ArticleDetails } from 'enteties/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <ArticleDetails id={id} />
    );
});

export default ArticleDetailsPage;
