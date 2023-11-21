import { classNames } from 'shared/helpers/classNames';
import { FC, useCallback, useState } from 'react';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'feature/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, userActions } from 'enteties/User';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setisAuthModal] = useState(false);

    const authData = useSelector(getUserData);

    const dispatch = useDispatch();

    const onToggleModal = useCallback(() => {
        setisAuthModal((prev) => !prev);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(classes.navbar, {}, [className])}>
                <Button onClick={onLogout} theme={EThemeButton.CLEAR_INVERTED}>{t('Выйти')}</Button>
            </div>
        );
    }

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <Button onClick={onToggleModal} theme={EThemeButton.CLEAR_INVERTED}>{t('Войти')}</Button>
            <LoginModal isOpen={isAuthModal} onClose={onToggleModal} lazy />
        </div>
    );
};
