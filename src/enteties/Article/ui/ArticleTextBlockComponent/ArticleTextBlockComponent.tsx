import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { IArticleTextBlock } from 'enteties/Article/model/types/article';
import { ETextSize, Text } from 'shared/uikit/Text/Text';
import classes from './ArticleTextBlockComponent.module.scss';

interface IProps {
 className?: string
 block?: IArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props:IProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(classes.ArticleTextBlockComponent, {}, [className])}>
            <Text title={block?.title} size={ETextSize.L} className={classes.title} />
            {/* eslint-disable-next-line react/no-array-index-key */}
            {block?.paragraphs.map((text, index) => <Text key={index} text={text} />)}
        </div>
    );
});

ArticleTextBlockComponent.displayName = 'ArticleTextBlockComponent';
