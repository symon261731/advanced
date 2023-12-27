import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { useSelector } from 'react-redux';
import { getProfileData } from 'enteties/Profile/model/selectors/getProfileData/getProfileData';
import { getIsProfileIsLoading } from 'enteties/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'enteties/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/uikit/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import { Input } from 'shared/uikit/Input/Input';
import classes from './ProfileCard.module.scss';

interface IProps {
 className?: string
}

export const ProfileCard = memo((props:IProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getIsProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(classes.ProfileCard, {}, [className])}>
            <div className={classes.header}>
                <Text title={t('Профиль пользователя')} />
                <Button theme={EThemeButton.OUTLINE}>{t('Редактировать')}</Button>
            </div>
            <div className={classes.data}>
                <Input className={classes.input} value={data?.firstName} />
                <Input className={classes.input} value={data?.lastName} />
                <Input className={classes.input} value={String(data?.age)} />
                <Input className={classes.input} value={data?.country} />

            </div>
        </div>
    );
});

ProfileCard.displayName = 'ProfileCard';
