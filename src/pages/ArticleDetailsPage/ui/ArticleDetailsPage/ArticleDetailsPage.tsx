/* eslint-disable i18next/no-literal-string */
import { ArticleDetails, ArticleList, EArticleView } from 'enteties/Article';
import { CommentList } from 'enteties/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ETextSize, EThemeText, Text } from 'shared/uikit/Text/Text';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'feature/AddComment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { addCommentForActicle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slice/ArticleDetailsCommentsSlice';
import { getArticleCommentsIsLoading, getArticleCommentsError } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import classes from './ArticleDetailsPage.module.scss';
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice';
import { getArticleRecommendationsError, getArticleRecommendationsIsLoading } from '../../model/selectors/rocommendations';
import { articleDetailsReducer } from '../../model/slice';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

const reducers: TReducerList = {
    articleDetailsPage: articleDetailsReducer,
};

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const recommendationsError = useSelector(getArticleRecommendationsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForActicle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
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
                    <div>
                        <Text className={classes.blockTitle} title={t('Рекомендуем')} size={ETextSize.L} />
                        {!recommendationsError
                            ? (
                                <ArticleList
                                    target="_blank"
                                    view={EArticleView.SMALL}
                                    articles={recommendations}
                                    isLoading={recommendationsIsLoading}
                                />
                            )
                            : <Text theme={EThemeText.ERROR} title={recommendationsError} />}
                    </div>
                    <div>
                        <Text className={classes.blockTitle} title={t('Комментарии')} size={ETextSize.L} />
                        <AddCommentForm onSendComment={(text) => onSendComment(text)} className={classes.addCommentForm} />
                        {!commentsError
                            ? <CommentList isLoading={commentsIsLoading} comments={comments || []} />
                            : <Text theme={EThemeText.ERROR} title={commentsError} />}
                    </div>
                </div>
            </DynamicModuleLoader>
        </PageWrapper>
    );
});

export default ArticleDetailsPage;
