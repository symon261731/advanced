import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Card.module.scss';

export enum ECardTheme {
    NORMAL = 'normal',
    OUTLINE = 'outline'
}

interface IProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
    theme?: ECardTheme
}
export const Card = memo(({
    className, children, theme = ECardTheme.NORMAL, ...otherProps
}:IProps) => (
    <div className={classNames(classes.card, {}, [classes[theme], className])} {...otherProps}>
        {children}
    </div>
));

Card.displayName = 'Card';
