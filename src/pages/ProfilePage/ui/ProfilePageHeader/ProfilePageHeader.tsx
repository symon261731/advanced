import { memo, useCallback } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import { Text } from 'shared/uikit/Text/Text';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    profileActions, getProfileReadonly, updateProfileData, getProfileData,
} from 'enteties/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserData } from 'enteties/User';
import classes from './ProfilePageHeader.module.scss';

interface IProps {
 className?: string
}

export const ProfilePageHeader = memo((props:IProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const authData = useSelector(getUserData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEditHandler = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEditHandler = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveHandler = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(classes.ProfilePageHeader, {}, [className])}>
            <Text title={t('Профиль пользователя')} />
            { canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            onClick={onEditHandler}
                            theme={EThemeButton.OUTLINE}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                        : (
                            <div className={classes.buttonGroup}>
                                <Button theme={EThemeButton.OUTLINE_RED} onClick={onCancelEditHandler}>{t('Отменить')}</Button>
                                <Button onClick={onSaveHandler}>{t('Сохранить')}</Button>
                            </div>
                        )}
                </div>
            )}
        </div>
    );
});

ProfilePageHeader.displayName = 'ProfilePageHeader';
