import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Card.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
}
export const Card = memo(({ className, children, ...otherProps }:IProps) => (
    <div className={classNames(classes.card, {}, [className])} {...otherProps}>
        {children}
    </div>
));

Card.displayName = 'Card';
