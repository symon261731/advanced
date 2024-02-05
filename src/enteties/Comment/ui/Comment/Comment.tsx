import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { Text } from 'shared/uikit/Text/Text';
import { Avatar } from 'shared/uikit/Avatar/Avatar';
import { Skeleton } from 'shared/uikit/Skeleton/Skeleton';
import { AppLink } from 'shared/uikit/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import classes from './Comment.module.scss';
import { IComment } from '../../model/types/comment';

interface IProps {
 className?: string;
 comment?: IComment;
 isLoading?: boolean;
}

export const Comment = memo((props:IProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(classes.Comment, { [classes.notBoard]: isLoading }, [className])}>
                <div className={classes.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={150} height={15} />
                </div>
                <Skeleton />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div className={classNames(classes.Comment, { }, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user.id}`}>
                <div className={classes.header}>
                    <Avatar size={30} src={comment?.user.avatar} />
                    <Text text={comment?.user.username} />
                </div>
            </AppLink>
            <Text text={comment?.text} />
        </div>
    );
});

Comment.displayName = 'Comment';
