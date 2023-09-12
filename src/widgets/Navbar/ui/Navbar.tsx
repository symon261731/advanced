import classes from './Navbar.module.scss';
import { classNames } from "shared/helpers/classNames";
import { AppLink, AppLinkTheme } from "shared/uikit/AppLink/AppLink";

interface Props {
    className?: string;
}

export const Navbar= ({className}:Props) : JSX.Element  => {

    return (
    <div className={classNames(classes.navbar,{},[className])}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>main</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>about</AppLink>
    </div>
    );
}