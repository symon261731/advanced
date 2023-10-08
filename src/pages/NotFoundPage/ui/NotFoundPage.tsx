import { classNames } from 'shared/helpers/classNames';
import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

interface Props {
    className?: string;
}

const NotFoundPage = ({ className }: Props) => {
    const { t } = useTranslation();

    return (<div className={classNames(classes.NotFoundPage, {}, [className])}>{t('Страница не найдена')}</div>);
};

export default NotFoundPage;
