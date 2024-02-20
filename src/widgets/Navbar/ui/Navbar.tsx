import { classNames } from 'shared/helpers/classNames';
import { memo, useCallback, useState } from 'react';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, userActions } from 'enteties/User';
import { LoginModal } from 'feature/AuthByUsername';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar = memo(({ className }: IProps) => {
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
        <header className={classNames(classes.navbar, {}, [className])}>
            <Button onClick={onToggleModal} theme={EThemeButton.CLEAR_INVERTED}>{t('Войти')}</Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onToggleModal} lazy />}
        </header>
    );
});

Navbar.displayName = 'Navbar';
