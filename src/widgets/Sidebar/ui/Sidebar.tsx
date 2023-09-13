import { useState } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import classes from './Sidebar.module.scss';

interface Props {
    className?: string;
}

export const Sidebar = ({ className }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={classNames(classes.sidebar, { [classes.opened]: isOpen }, [className])}>
            <div className={classes.switches}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
            <button type="button" className={classes.toggleButton} onClick={toggleHandler}>{isOpen ? '<' : '>'}</button>
        </div>
    );
};
