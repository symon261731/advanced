import { ButtonHTMLAttributes, memo } from 'react';
import { TMods, classNames } from 'shared/helpers/classNames';
import classes from './Button.module.scss';

export enum EThemeButton {
    NORMAL = 'normal',
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum EButttonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: EThemeButton;
    disabled?: boolean;
    size?: EButttonSize;
    square?: boolean;
}

export const Button = memo((props: IProps) => {
    const {
        className,
        disabled = false,
        size = EButttonSize.M,
        square = false,
        children,
        theme = EThemeButton.NORMAL, ...otherProps
    } = props;

    const mods: TMods = {
        [classes.square]: square,
        [classes.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={
                classNames(classes.button, mods, [className, classes[theme], classes[size]])
            }
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
