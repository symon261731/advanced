import {
    ChangeEvent, InputHTMLAttributes, createRef, memo, useEffect,
} from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Input.module.scss';

export enum EInputTheme {
    PRIMARY = 'primary',
    CLEAR = 'CLEAR',
}

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    theme?: EInputTheme;
    autoFocus?: boolean;
}

export const Input = memo((props:IProps) => {
    const {
        className, value, onChange, theme = EInputTheme.PRIMARY, autoFocus, ...otherProps
    } = props;

    const inputRef = createRef<HTMLInputElement>();

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
    };

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus, inputRef]);

    return (
        <input
            ref={inputRef}
            className={classNames(classes.Input, {}, [className, classes[theme]])}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
});

Input.displayName = 'Input';
