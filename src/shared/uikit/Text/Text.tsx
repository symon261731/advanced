import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Text.module.scss';

export enum EThemeText {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface IProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: EThemeText;
}

export const Text = memo((props:IProps) => {
    const {
        className, title, text, theme,
    } = props;

    const mods = {
        [classes.error]: theme === EThemeText.ERROR,
    };

    return (
        <div className={classNames(classes.Text, {}, [className])}>
            <p className={classNames(classes.title, mods, [])}>{title}</p>
            <p className={classNames(classes.text, mods, [])}>{text}</p>
        </div>
    );
});

Text.displayName = 'Text';
