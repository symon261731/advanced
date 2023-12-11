import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'enteties/Profile';
import classes from './ProfilePage.module.scss';

const reducers: TReducerList = {
    profile: profileReducer,
};

interface IProps {
 className?: string
}

const ProfilePage = memo((props:IProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <div className={classNames(classes.ProfilePage, {}, [className])}>
                <div>{t('Профиль')}</div>
            </div>
        </DynamicModuleLoader>
    );
});

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
