import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames';
import { Button } from 'shared/uikit/Button/Button';
import { Input } from 'shared/uikit/Input/Input';
import classes from './LoginForm.module.scss';

interface IProps {
    className?: string;
}

export const LoginForm = ({ className }:IProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(classes.LoginForm, {}, [className])}>
            <Input autoFocus type="text" placeholder={t('Логин')} />
            <Input type="password" placeholder={t('Пароль')} />
            <Button className={classes.LoginFormButton}>{t('Войти')}</Button>
        </div>
    );
};

LoginForm.displayName = 'LoginForm';
