import { memo, useState } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import classes from './Sidebar.module.scss';
import { SidebarItemsList } from '../model/items';
import { SidebarItem } from './SidebarItem/SidebarItem';

interface IProps {
    className?: string;
}

export const Sidebar = memo(({ className }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => setIsOpen((prev) => !prev);

    return (
        <div className={classNames(classes.sidebar, { [classes.opened]: isOpen }, [className])} data-testid="sidebar">
            <div className={classes.links}>
                {SidebarItemsList.map((linkInfo) => <SidebarItem key={linkInfo.path} item={linkInfo} isOpen={isOpen} />)}
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
});

Sidebar.displayName = 'Sidebar';
