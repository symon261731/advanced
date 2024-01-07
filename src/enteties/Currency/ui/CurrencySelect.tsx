import { memo } from 'react';
import { Select } from 'shared/uikit/Select/Select';
import { useTranslation } from 'react-i18next';
import { ECurrency } from '../model/types/currency';

const options = [
    { value: ECurrency.RUB, content: 'Rubles' },
    { value: ECurrency.EUR, content: 'Euro' },
    { value: ECurrency.USD, content: 'Dollars' },
];

interface IProps {
    value?: ECurrency,
    onChange?: (newValue: ECurrency)=> void,
    readonly?: boolean,
}

export const CurrencySelect = memo((props: IProps) => {
    const { value, onChange, readonly } = props;

    const { t } = useTranslation();

    const onChangeHandler = (value: string) => {
        onChange?.(value as ECurrency);
    };

    return (
        <Select
            value={value}
            options={options}
            label={t('Укажите валюту')}
            onChange={(newValue) => onChangeHandler(newValue)}
            readonly={readonly}
        />
    );
});

CurrencySelect.displayName = 'CurrencySelect';
