import {
    ChangeEvent, InputHTMLAttributes, createRef, memo, useEffect,
} from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Input.module.scss';

export enum EInputTheme {
    PRIMARY = 'primary',
    CLEAR = 'CLEAR',
}

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'> {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    theme?: EInputTheme;
    autoFocus?: boolean;
    readOnly?: boolean;
}

export const Input = memo((props:IProps) => {
    const {
        className,
        value,
        onChange,
        theme = EInputTheme.PRIMARY,
        readOnly = false,
        autoFocus,
        ...otherProps
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
            readOnly={readOnly}
            ref={inputRef}
            className={classNames(classes.Input, { [classes.readOnly]: readOnly }, [className, classes[theme]])}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
});

Input.displayName = 'Input';
