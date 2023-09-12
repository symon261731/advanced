
import { useState } from 'react';
import classes from './Sidebar.module.scss';
import { classNames } from 'shared/helpers/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface Props {
    className?: string;
}

export const Sidebar = ({className}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHandler = () => {
        setIsOpen((prev)=> !prev);
    }

    return (
        <div className={classNames(classes.sidebar, {[classes.opened]: isOpen}, [className])}>
            <div className={classes.switches}>
                <ThemeSwitcher/>
            </div>
            <button className={classes.toggleButton} onClick={toggleHandler}>{isOpen ?'<' : '>'}</button>
        </div>
    )
}