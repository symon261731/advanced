import { useEffect } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { ProfileCard, fetchProfileData, profileReducer } from 'enteties/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import classes from './ProfilePage.module.scss';

const reducers: TReducerList = {
    profile: profileReducer,
};

interface IProps {
 className?: string
}

const ProfilePage = (props:IProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames(classes.ProfilePage, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
