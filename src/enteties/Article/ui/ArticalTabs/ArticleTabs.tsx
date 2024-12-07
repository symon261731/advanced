import { memo, useMemo } from 'react';
import { ITabElement, Tabs } from 'shared/uikit/Tabs/Tabs';
import { classNames } from 'shared/helpers/classNames';
import { EArticleType } from '../../model/types/article';

interface IProps {
 className?: string
 onChangeType: (newType: EArticleType)=>void;
 value: EArticleType;
}

export const ArticleTabs = memo((props:IProps) => {
    const { className, onChangeType, value } = props;

    const typeTabs = useMemo<ITabElement<EArticleType>[]>(() => [
        { value: EArticleType.ALL, content: 'Все' },
        { value: EArticleType.ECONOMICS, content: 'Экономика' },
        { value: EArticleType.IT, content: 'IT' },
        { value: EArticleType.SCIENCE, content: 'Наука' },
    ], []);

    return (
        <Tabs className={classNames('', {}, [className])} onTabClick={onChangeType} value={value} tabs={typeTabs} />
    );
});

ArticleTabs.displayName = 'ArticleTabs';
