import { ArticleDetails } from 'enteties/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ETextSize, Text } from 'shared/uikit/Text/Text';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { ArticleRecommendationList } from 'feature/ArticleRecommendationList';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ui/ArticleDetailsComments';

const reducers: TReducerList = {
    articleDetailsPage: articleDetailsReducer,
};

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <PageWrapper>{t('Статья не найдена')}</PageWrapper>
        );
    }

    return (
        <PageWrapper>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <ArticleDetailsPageHeader />
                <div>
                    <ArticleDetails id={id} />
                    <ArticleRecommendationList />
                    <div>
                        <Text title={t('Комментарии')} size={ETextSize.L} />
                        <ArticleDetailsComments articleId={id} />
                    </div>
                </div>
            </DynamicModuleLoader>
        </PageWrapper>
    );
});

export default ArticleDetailsPage;
