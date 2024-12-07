import { memo, ReactNode, useCallback } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Tabs.module.scss';
import { Card, ECardTheme } from '../Card/Card';

export interface ITabElement<T> {
    value: T;
    content: ReactNode;
}

interface IProps<T extends string> {
    className?: string;
    tabs: ITabElement<T>[];
    value: T;
    onTabClick: (tabValue: T) => void;
}

export const Tabs = <TabsGenericElement extends string> (props:IProps<TabsGenericElement>) => {
    const {
        className, onTabClick, tabs, value,
    } = props;

    const onClickHandler = useCallback((tab: TabsGenericElement) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(classes.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={classes.singleTab}
                    key={tab.value}
                    onClick={onClickHandler(tab.value)}
                    theme={tab.value === value ? ECardTheme.NORMAL : ECardTheme.OUTLINE}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};

Tabs.displayName = 'Tabs';
