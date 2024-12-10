import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Text.module.scss';

export enum EThemeText {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
    ERROR = 'error'
}

export enum ETextSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
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
    size?: ETextSize;
}

export const Text = memo((props:IProps) => {
    const {
        className,
        title,
        text,
        theme = EThemeText.PRIMARY,
        align = ETextAlign.LEFT,
        size = ETextSize.M,
    } = props;

    const mods = {
        [classes.error]: theme === EThemeText.ERROR,
    };

    return (
        <div className={classNames(classes.Text, {}, [classes[align], classes[size], classes[theme]])}>
            {title && <p className={classNames(classes.title, mods, [classes[theme], className])}>{title}</p>}
            {text && <p className={classNames(classes.text, mods, [classes[theme], className])}>{text}</p>}
        </div>
    );
});

Text.displayName = 'Text';
