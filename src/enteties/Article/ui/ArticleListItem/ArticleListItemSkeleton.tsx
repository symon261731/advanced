import { memo } from 'react';
import { EArticleView } from 'enteties/Article';
import { classNames } from 'shared/helpers/classNames';
import classes from 'enteties/Article/ui/ArticleListItem/ArticleListItem.module.scss';
import { Card } from 'shared/uikit/Card/Card';
import { Skeleton } from 'shared/uikit/Skeleton/Skeleton';

interface IProps {
    view : EArticleView;
}
export const ArticleListItemSkeleton = memo(({ view }:IProps) => {
    if (view === EArticleView.BIG) {
        return (
            <div className={classNames(classes.ArticleListItem, {}, [classes[view]])}>
                <Card>
                    <div className={classes.header}>
                        <div className={classes.userInfo}>
                            <Skeleton border="50%" width={30} height={30} />
                            <Skeleton height={16} width={50} />
                        </div>
                        <Skeleton width={100} height={16} />
                    </div>
                    <Skeleton height={25} width={150} />
                    <Skeleton height={19} width={100} />
                    <Skeleton height={200} />
                    <br />
                    <Skeleton height={210} />
                    <br />
                    <div className={classes.footer}>
                        <Skeleton width={150} />
                        <Skeleton width={100} />
                    </div>
                </Card>
            </div>

        );
    }

    return (
        <div className={classNames(classes.ArticleListItem, {}, [classes[view]])}>
            <Card>
                <div className={classes.imageContainer}>
                    <Skeleton width={200} height={200} />
                </div>
                <div className={classes.infoWrapper}>
                    <Skeleton height={16} width={130} />
                    <Skeleton height={16} width={50} />
                </div>
                <Skeleton height={16} />
            </Card>
        </div>
    );
});

ArticleListItemSkeleton.displayName = 'ArticleListItemSkeleton';
