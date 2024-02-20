import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'shared/uikit/PageWrapper/PageWrapper';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>{t('Главная')}</PageWrapper>
    );
};

export default MainPage;
