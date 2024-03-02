import { useTranslation } from 'react-i18next';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <PageWrapper>
            <div>{t('О сайте')}</div>
        </PageWrapper>
    );
};

export default AboutPage;
