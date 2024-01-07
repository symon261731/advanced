import { memo } from 'react';
import { Select } from 'shared/uikit/Select/Select';
import { ECountry } from '../model/types/country';

const options = [
    { value: ECountry.Armenia, content: ECountry.Armenia },
    { value: ECountry.Belarus, content: ECountry.Belarus },
    { value: ECountry.Kazakhstan, content: ECountry.Kazakhstan },
    { value: ECountry.Russia, content: ECountry.Russia },
];

interface IProps {
    value?: ECountry,
    onChange?: (newValue: ECountry) => void,
    readonly?: boolean
}

export const CountrySelect = memo((props:IProps) => {
    const { value, onChange, readonly } = props;

    const onChangeHandler = (newValue: string) => {
        onChange?.(newValue as ECountry);
    };

    return (
        <Select options={options} readonly={readonly} value={value} onChange={(newValue) => onChangeHandler(newValue)} />
    );
});

CountrySelect.displayName = 'CountrySelect';
