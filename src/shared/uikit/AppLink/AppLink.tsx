import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/helpers/classNames';
import { memo } from 'react';
import classes from './AppLink.module.scss';

export enum TAppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED_PRIMARY = 'inverted_primary',
    INVERTED_SECONDARY = 'inverted_secondary'
}

interface IProps extends LinkProps {
    className?: string;
    theme?: TAppLinkTheme;
}

export const AppLink = memo((props: IProps) => {
    const {
        to,
        className,
        children,
        theme = TAppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(classes.link, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

AppLink.displayName = 'AppLink';
