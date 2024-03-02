import { classNames } from 'shared/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import classes from './NotFoundPage.module.scss';

interface Props {
    className?: string;
}

const NotFoundPage = ({ className }: Props) => {
    const { t } = useTranslation();

    return (
        <PageWrapper className={classNames(classes.NotFoundPage, {}, [className])}>{t('Страница не найдена')}</PageWrapper>
    );
};

export default NotFoundPage;
