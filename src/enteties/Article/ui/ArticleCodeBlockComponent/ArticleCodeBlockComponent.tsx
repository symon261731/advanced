import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { IActicleCodeBlock } from 'enteties/Article/model/types/article';
import { Code } from 'shared/uikit/Code/Code';

interface IProps {
 className?: string
 block: IActicleCodeBlock;
}

export const ArticleCodeBlockComponent = memo((props:IProps) => {
    const { className, block } = props;
    return (
        <div className={classNames('', {}, [className])}>
            <Code text={block.code} />
        </div>
    );
});

ArticleCodeBlockComponent.displayName = 'ArticleCodeBlockComponent';
