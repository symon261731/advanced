import { AddCommentForm } from 'feature/AddComment';
import { memo, useCallback } from 'react';
import { EThemeText, Text } from 'shared/uikit/Text/Text';
import { CommentList } from 'enteties/Comment';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useSelector } from 'react-redux';
import { addCommentForActicle } from '../../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../../../model/selectors/comments';
import { getArticleComments } from '../../../model/slice/ArticleDetailsCommentsSlice';
import classes from './ArticleDetailsComments.module.scss';

interface IProps {
    articleId: string;
}

export const ArticleDetailsComments = memo(({ articleId }:IProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForActicle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(articleId));
    });

    if (commentsError) {
        return (
            <Text theme={EThemeText.ERROR} title={t('Произошла ошибка')} />
        );
    }

    return (
        <div>
            <AddCommentForm onSendComment={(text) => onSendComment(text)} className={classes.addCommentForm} />
            <CommentList isLoading={commentsIsLoading} comments={comments || []} />
        </div>
    );
});

ArticleDetailsComments.displayName = 'ArticleDetailsComments';
