import { ECountry } from 'enteties/Country';
import { ECurrency } from 'enteties/Currency';
import { ProfileCard } from 'enteties/Profile';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { EThemeText, Text } from 'shared/uikit/Text/Text';
import { useCallback } from 'react';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import {
    getProfileForm, getProfileReadonly, getIsProfileIsLoading, getProfileError, getProfileValidationErrors,
} from '../model/selectors/selectors';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import { EValidationError } from '../model/types/profile';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: TReducerList = {
    profile: profileReducer,
};

interface IProps {
    id: string;
}

export const EditableProfileCard = ({ id }: IProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const formData = useSelector(getProfileForm);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getIsProfileIsLoading);
    const error = useSelector(getProfileError);
    const validationErrors = useSelector(getProfileValidationErrors);

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
            <ProfilePageHeader />
            {validationErrors?.length
                ? validationErrors.map((err) => <Text key={err} theme={EThemeText.ERROR} text={validateErrorsTranslates[err]} />)
                : null}
            <div>
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
