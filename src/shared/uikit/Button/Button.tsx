import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Button.module.scss';

export enum EThemeButton {
    NORMAL = 'normal',
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: EThemeButton;
}

export const Button: FC<Props> = (props) => {
    const {
        className, children, theme = EThemeButton.NORMAL, ...otherProps
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
