import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Text.module.scss';

export enum EThemeText {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum ETextAlign {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

interface IProps {
    className?: string;
    title?: string;
    text?: string;
    align?: ETextAlign;
    theme?: EThemeText;
}

export const Text = memo((props:IProps) => {
    const {
        className, title, text, theme, align = ETextAlign.LEFT,
    } = props;

    const mods = {
        [classes.error]: theme === EThemeText.ERROR,
    };

    return (
        <div className={classNames(classes.Text, {}, [className])}>
            <p className={classNames(classes.title, mods, [classes[align]])}>{title}</p>
            <p className={classNames(classes.text, mods, [classes[align]])}>{text}</p>
        </div>
    );
});

Text.displayName = 'Text';
