import { useState } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/uikit/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainSvg from 'assets/mainPage.svg';
import AboutSvg from 'assets/aboutPage.svg';
import classes from './Sidebar.module.scss';

interface IProps {
    className?: string;
}

export const Sidebar = ({ className }: IProps) => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={classNames(classes.sidebar, { [classes.opened]: isOpen }, [className])} data-testid="sidebar">
            <div className={classes.links}>
                <AppLink theme={AppLinkTheme.INVERTED_SECONDARY} to={RoutePath.main}>
                    <MainSvg />
                    {isOpen && <span>{t('Главная')}</span>}
                </AppLink>
                <AppLink theme={AppLinkTheme.INVERTED_SECONDARY} to={RoutePath.about}>
                    <AboutSvg />
                    {isOpen && <span>{t('О сайте')}</span> }
                </AppLink>
            </div>
            <div className={classes.switches}>
                <ThemeSwitcher />
                <LanguageSwitcher short={!isOpen} />
            </div>
            <Button
                square
                theme={EThemeButton.BACKGROUND_INVERTED}
                data-testid="sidebar-toggle-button"
                type="button"
                className={classes.togglebutton}
                onClick={toggleHandler}
            >
                {isOpen ? '<' : '>'}
            </Button>
        </div>
    );
};
