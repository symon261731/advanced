import { classNames } from 'shared/helpers/classNames';
import { AppLink, AppLinkTheme } from 'shared/uikit/AppLink/AppLink';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './Navbar.module.scss';

interface Props {
    className?: string;
}

export const Navbar: FC<Props> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('Главная')}</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('О сайте')}</AppLink>
        </div>
    );
};
