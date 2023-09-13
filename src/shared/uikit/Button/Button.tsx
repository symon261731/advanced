import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<Props> = (props) => {
    const {
        className, children, theme, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(classes.button, {}, [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
