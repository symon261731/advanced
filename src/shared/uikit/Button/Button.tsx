import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Button.module.scss';

export enum EThemeButton {
    NORMAL = 'normal',
    CLEAR = 'clear',
    OUTLINE = 'outline',
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
    size?: EButttonSize;
    square?: boolean;
}

export const Button: FC<IProps> = (props) => {
    const {
        className, size = EButttonSize.M, square = false, children, theme = EThemeButton.NORMAL, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={
                classNames(classes.button, { [classes.square]: square }, [className, classes[theme], classes[size]])
            }
            {...otherProps}
        >
            {children}
        </button>
    );
};
