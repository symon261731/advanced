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
} from 'enteties/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ECurrency } from 'enteties/Currency';
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

    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const readonly = useSelector(getProfileReadonly);
    const isLoading = useSelector(getIsProfileIsLoading);
    const error = useSelector(getProfileError);

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

    // const onChangeCountry = useCallback(() => {

    // }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames(classes.ProfilePage, {}, [className])}>
                <ProfilePageHeader />
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
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
