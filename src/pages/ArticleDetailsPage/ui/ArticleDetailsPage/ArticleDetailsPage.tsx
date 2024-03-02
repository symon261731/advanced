import { ArticleDetails } from 'enteties/Article';
import { CommentList } from 'enteties/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { ETextSize, EThemeText, Text } from 'shared/uikit/Text/Text';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { AddCommentForm } from 'feature/AddComment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/uikit/Button/Button';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { addCommentForActicle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/ArticleDetailsCommentsSlice';
import { getArticleCommentsIsLoading, getArticleCommentsError } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import classes from './ArticleDetailsPage.module.scss';

const reducers: TReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForActicle(text));
    }, [dispatch]);

    const returnToArticleList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

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
                <Button onClick={returnToArticleList}>{t('<Вернуться')}</Button>
                <div>
                    <ArticleDetails id={id} />
                    <Text className={classes.commentBlockTitle} title={t('Комментарии')} size={ETextSize.L} />
                    <AddCommentForm onSendComment={(text) => onSendComment(text)} className={classes.addCommentForm} />
                    {!commentsError
                        ? <CommentList isLoading={commentsIsLoading} comments={comments || []} />
                        : <Text theme={EThemeText.ERROR} title={commentsError} />}
                </div>
            </DynamicModuleLoader>
        </PageWrapper>
    );
});

export default ArticleDetailsPage;
