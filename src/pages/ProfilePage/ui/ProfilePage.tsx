import { classNames } from 'shared/helpers/classNames';
import { EditableProfileCard } from 'feature/EditableProfileCard';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/uikit/Text/Text';
import { useTranslation } from 'react-i18next';
import classes from './ProfilePage.module.scss';

interface IProps {
 className?: string
}

const ProfilePage = (props:IProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { id } = useParams<{id: string}>();

    if (!id) {
        return <Text text={t('Отсутствует id')} />;
    }

    return (
        <PageWrapper className={classNames(classes.ProfilePage, {}, [className])}>
            <EditableProfileCard id={id} />
        </PageWrapper>

    );
};

export default ProfilePage;
