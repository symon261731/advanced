import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { ETextSize, Text } from 'shared/uikit/Text/Text';
import { Icon } from 'shared/uikit/Icon/Icon';
import EyeSVG from 'assets/eye.svg';
import { Card } from 'shared/uikit/Card/Card';
import { Avatar } from 'shared/uikit/Avatar/Avatar';
import { Button } from 'shared/uikit/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/uikit/AppLink/AppLink';
import classes from './ArticleListItem.module.scss';
import {
    EArticleBlockType, EArticleView, IArticle, IArticleTextBlock,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface IProps {
    className?: string;
    article: IArticle;
    view: EArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({
    className, article, view, target = '_self',
}: IProps) => {
    const { t } = useTranslation('article');

    const typesOfTopic = <Text text={article.type.join(' ')} size={ETextSize.M} className={classes.typesOfArticle} />;
    const views = (
        <div className={classes.viewBox}>
            <Text title={String(article.views)} />
            <Icon Svg={EyeSVG} />
        </div>
    );

    if (view === EArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === EArticleBlockType.TEXT) as IArticleTextBlock;
        return (
            <div className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}>
                <Card>
                    <div className={classes.header}>
                        <div className={classes.userInfo}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text text={article.user.username} />
                        </div>
                        <Text text={article.createAt} />
                    </div>
                    <Text title={article.title} size={ETextSize.L} />
                    {typesOfTopic}
                    <img src={article.img} alt={article.title} className={classes.image} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={classes.textBlock} />
                    )}
                    <div className={classes.footer}>
                        <AppLink
                            to={`${RoutePath.article_details}${article.id}`}
                            target={target}
                        >
                            <Button>{`${t('Читать далее')}...`}</Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            target={target}
            to={`${RoutePath.article_details}${article.id}`}
            className={classNames(classes.ArticleListItem, {}, [className, classes[view]])}
        >
            <Card>
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={article.img} alt={article.title} />
                    <Text className={classes.date} text={article.createAt} />
                </div>
                <div className={classes.infoWrapper}>
                    {typesOfTopic}
                    {views}
                </div>
                <Text text={article.title} className={classes.title} />
            </Card>
        </AppLink>
    );
});

ArticleListItem.displayName = 'ArticleListItem';
