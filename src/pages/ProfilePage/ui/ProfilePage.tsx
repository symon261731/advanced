import { useCallback, useEffect } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
    getIsProfileIsLoading,
    getProfileError,
    profileActions,
    getProfileReadonly,
    getProfileForm,
    getProfileValidationErrors,
} from 'enteties/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ECurrency } from 'enteties/Currency';
import { EThemeText, Text } from 'shared/uikit/Text/Text';
import { ECountry } from 'enteties/Country';
import { EValidationError } from 'enteties/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import classes from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: TReducerList = {
    profile: profileReducer,
};

interface IProps {
 className?: string
}

const ProfilePage = (props:IProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getIsProfileIsLoading);
    const error = useSelector(getProfileError);
    const validationErrors = useSelector(getProfileValidationErrors);
    const { id } = useParams<{id: string}>();

    const onChangeFirstName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ firstName: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value: ECurrency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value: ECountry) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    const validateErrorsTranslates = {
        [EValidationError.INCORRECT_AGE]: t('Некорректный возраст'),
        [EValidationError.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [EValidationError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательно'),
        [EValidationError.NO_DATA]: t('Данные не указаны'),
        [EValidationError.SERVER_ERROR]: t('Ошибка сервера'),

    };

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames(classes.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
                {validationErrors?.length
                    ? validationErrors.map((err) => <Text key={err} theme={EThemeText.ERROR} text={validateErrorsTranslates[err]} />)
                    : null}
                <ProfileCard
                    readonly={readonly}
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
