/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { Text } from 'shared/uikit/Text/Text';
import { useTranslation } from 'react-i18next';
import { IComment } from '../../model/types/comment';
import { Comment } from '../Comment/Comment';
import classes from './CommentsList.module.scss';

interface IProps {
 className?: string;
 comments?: IComment[];
 isLoading?: boolean
}

export const CommentList = memo((props:IProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames('', {}, [className])}>
                <Comment isLoading className={classes.comment} key={1} />
                <Comment isLoading className={classes.comment} key={2} />
                <Comment isLoading className={classes.comment} key={3} />
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            {comments?.length
                ? comments?.map((info, index) => (
                    <Comment
                        isLoading={isLoading}
                        className={classes.comment}
                        key={index}
                        comment={info}
                    />
                ))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
});

CommentList.displayName = 'CommentList';
