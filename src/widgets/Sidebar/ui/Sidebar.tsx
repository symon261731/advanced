import { useState } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import classes from './Sidebar.module.scss';

interface IProps {
    className?: string;
}

export const Sidebar = ({ className }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={classNames(classes.sidebar, { [classes.opened]: isOpen }, [className])} data-testid="sidebar">
            <div className={classes.switches}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
            <button data-testid="sidebar-toggle-button" type="button" className={classes.togglebutton} onClick={toggleHandler}>{isOpen ? '<' : '>'}</button>
        </div>
    );
};
