import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames';
import { Button } from 'shared/uikit/Button/Button';
import { Input } from 'shared/uikit/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { loginActions } from 'feature/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'feature/AuthByUsername/model/selectors/getLoginState';
import { getPasswordState } from 'feature/AuthByUsername/model/selectors/getPasswordState';
import { loginByUsername } from 'feature/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { getIsLoadingState } from 'feature/AuthByUsername/model/selectors/getIsLoadingState';
import { getErrorState } from 'feature/AuthByUsername/model/selectors/getErrorState';
import { EThemeText, Text } from 'shared/uikit/Text/Text';
import classes from './LoginForm.module.scss';

interface IProps {
    className?: string;
    isOpen?: boolean;
}

export const LoginForm = memo(({ className, isOpen }:IProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const isLoading = useSelector(getIsLoadingState);
    const username = useSelector(getLoginState);
    const password = useSelector(getPasswordState);
    const error = useSelector(getErrorState);

    const onChangeUserName = useCallback((newValue: string) => {
        dispatch(loginActions.setUserName(newValue));
    }, [dispatch]);

    const onChangeUserPassword = useCallback((newValue: string) => {
        dispatch(loginActions.setUserPassword(newValue));
    }, [dispatch]);

    const onLoginButtonClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    const onLoginEnterClick = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onLoginButtonClick();
        }
    }, [onLoginButtonClick]);

    useEffect(() => {
        if (isOpen && !isLoading) {
            window.addEventListener('keydown', onLoginEnterClick);
        }

        return () => { window.removeEventListener('keydown', onLoginEnterClick); };
    }, [isLoading, isOpen, onLoginEnterClick]);

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text theme={EThemeText.ERROR} text={t('Неверный логин или пароль')} />}
            <Input value={username} onChange={onChangeUserName} autoFocus type="text" placeholder={t('Логин')} />
            <Input value={password} onChange={onChangeUserPassword} type="password" placeholder={t('Пароль')} />
            <Button disabled={isLoading} onClick={onLoginButtonClick} className={classes.LoginFormButton}>{t('Войти')}</Button>
        </div>
    );
});

LoginForm.displayName = 'LoginForm';
