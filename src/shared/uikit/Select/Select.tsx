import {
    ChangeEvent, useCallback, useMemo,
} from 'react';
import { TMods, classNames } from 'shared/helpers/classNames';
import classes from './Select.module.scss';

export interface ISelectOptions<T extends string> {
    value: T;
    content: string;
}

interface IProps<T extends string> {
 className?: string;
 label?: string;
 options?: ISelectOptions<T>[];
 readonly?: boolean
 value?: T;
 onChange?: (value: T) => void;
}

export const Select = <SelectGenericType extends string>(props:IProps<SelectGenericType>) => {
    const {
        className, label, options, value, onChange, readonly = false,
    } = props;

    const optionsList = useMemo(
        () => options?.map(({ value, content }) => <option className={classes.option} value={value} key={value}>{content}</option>),
        [options],
    );

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as SelectGenericType);
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
};
