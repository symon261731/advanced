import { ArticleDetails } from 'enteties/Article';
import { CommentList } from 'enteties/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ETextSize, EThemeText, Text } from 'shared/uikit/Text/Text';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect';
import { AddCommentForm } from 'feature/AddNewComment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
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

    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForActicle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <div>
                {t('Статья не найдена')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div>
                <ArticleDetails id={id} />
                <Text className={classes.commentBlockTitle} title={t('Комментарии')} size={ETextSize.L} />
                <AddCommentForm onSendComment={(text) => onSendComment(text)} className={classes.addCommentForm} />
                { !commentsError
                    ? <CommentList isLoading={commentsIsLoading} comments={comments || []} />
                    : <Text theme={EThemeText.ERROR} title={commentsError} />}
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
