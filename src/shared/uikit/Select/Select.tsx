import {
    ChangeEvent, memo, useCallback, useMemo,
} from 'react';
import { TMods, classNames } from 'shared/helpers/classNames';
import classes from './Select.module.scss';

export interface ISelectOptions {
    value: string;
    content: string;
}

interface IProps {
 className?: string;
 label?: string;
 options?: ISelectOptions[];
 readonly?: boolean
 value?: string;
 onChange?: (value: string) => void;
}

export const Select = memo((props:IProps) => {
    const {
        className, label, options, value, onChange, readonly = false,
    } = props;

    const optionsList = useMemo(
        () => options?.map(({ value, content }) => <option className={classes.option} value={value} key={value}>{content}</option>),
        [options],
    );

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }, [onChange]);

    const mods: TMods = {};

    return (
        <div className={classNames(classes.wrapper, mods, [className])}>
            {label && <span>{label}</span>}
            <select disabled={readonly} value={value} onChange={(newValue) => onChangeHandler(newValue)} className={classes.select}>
                {optionsList}
            </select>
        </div>
    );
});

Select.displayName = 'Select';
