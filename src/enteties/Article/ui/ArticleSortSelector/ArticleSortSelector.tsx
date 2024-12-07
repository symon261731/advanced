import { memo, useMemo } from 'react';
import { ISelectOptions, Select } from 'shared/uikit/Select/Select';
import { useTranslation } from 'react-i18next';
import { TSortOrder } from 'shared/types/types';
import { classNames } from 'shared/helpers/classNames';
import { EArticleSortField } from '../../model/types/article';
import classes from './ArticleSortSelector.module.scss';

interface IProps {
    className?: string;
    sortFieldValue: EArticleSortField;
    sortByValue: TSortOrder;
    onChangeSortField: (newValue: EArticleSortField)=> void;
    onChangeSortBy: (newValue: TSortOrder)=> void;
}

export const ArticleSortSelector = memo(({
    className, sortFieldValue, sortByValue, onChangeSortBy, onChangeSortField,
}: IProps) => {
    const { t } = useTranslation();

    const sortOptions = useMemo<ISelectOptions<TSortOrder>[]>(() => [
        { value: 'asc', content: 'Возрастанию' },
        { value: 'desc', content: 'Убыванию' },
    ], []);

    const sortValuesOptions = useMemo<ISelectOptions<EArticleSortField>[]>(() => [
        { value: EArticleSortField.CREATED, content: 'По дате создания' },
        { value: EArticleSortField.TITLE, content: 'По названию' },
        { value: EArticleSortField.VIEWS, content: 'По количеству просмотров' },
    ], []);

    return (
        <div className={classNames(classes.ArticleSortSelector, {}, [className])}>
            <Select
                value={sortByValue}
                onChange={onChangeSortBy}
                options={sortOptions}
                label={t('Сортировать по')}
            />
            <Select
                value={sortFieldValue}
                onChange={onChangeSortField}
                options={sortValuesOptions}
                label={t('по')}
            />
        </div>

    );
});
