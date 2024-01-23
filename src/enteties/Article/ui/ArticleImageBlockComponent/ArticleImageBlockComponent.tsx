import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { IArticleImageBlock } from 'enteties/Article/model/types/article';
import { Text } from 'shared/uikit/Text/Text';
import classes from './ArticleImageBlockComponent.module.scss';

interface IProps {
 className?: string
 block: IArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props:IProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(classes.ArticleImageBlockComponent, {}, [className])}>
            <Text title={block.title} className={classes.title} />
            <img className={classes.image} src={block.src} alt="123" />
        </div>
    );
});

ArticleImageBlockComponent.displayName = 'ArticleImageBlockComponent';
