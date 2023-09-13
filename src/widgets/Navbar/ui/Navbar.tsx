import { classNames } from 'shared/helpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/uikit/AppLink/AppLink';
import { FC } from 'react';
import classes from './Navbar.module.scss';

interface Props {
    className?: string;
}

export const Navbar: FC<Props> = ({ className }) => (
    <div className={classNames(classes.navbar, {}, [className])}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">about</AppLink>
    </div>
);
