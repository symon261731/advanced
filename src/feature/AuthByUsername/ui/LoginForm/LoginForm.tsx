import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames';
import { Button } from 'shared/uikit/Button/Button';
import { Input } from 'shared/uikit/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { loginActions, loginReducer } from 'feature/AuthByUsername/model/slice/loginSlice';
import { getLoginUsername } from 'feature/AuthByUsername/model/selectors/getLoginUsername';
import { getPasswordState } from 'feature/AuthByUsername/model/selectors/getPasswordState';
import { loginByUsername } from 'feature/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { getIsLoadingState } from 'feature/AuthByUsername/model/selectors/getIsLoadingState';
import { getErrorState } from 'feature/AuthByUsername/model/selectors/getErrorState';
import { EThemeText, Text } from 'shared/uikit/Text/Text';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import classes from './LoginForm.module.scss';

const initialReducers: TReducerList = { loginForm: loginReducer };

interface IProps {
    className?: string;
    isOpen?: boolean;
}

const LoginForm = memo(({ className, isOpen }:IProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const isLoading = useSelector(getIsLoadingState);
    const username = useSelector(getLoginUsername);
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
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(classes.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text theme={EThemeText.ERROR} text={t('Неверный логин или пароль')} />}
                <Input value={username} onChange={onChangeUserName} autoFocus type="text" placeholder={t('Логин')} />
                <Input value={password} onChange={onChangeUserPassword} type="password" placeholder={t('Пароль')} />
                <Button disabled={isLoading} onClick={onLoginButtonClick} className={classes.LoginFormButton}>{t('Войти')}</Button>
            </div>
        </DynamicModuleLoader>

    );
});

LoginForm.displayName = 'LoginForm';

export default LoginForm;
