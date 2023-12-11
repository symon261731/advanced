import { Button } from 'shared/uikit/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import classes from './ErrorPage.module.scss';

const ErrorPage = memo(() => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classes.root}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h2>Карамба все упало</h2>
            <Button onClick={() => reloadPage()}>{t('Обновить страницу')}</Button>
        </div>
    );
});

ErrorPage.displayName = 'ErrorPage';

export default ErrorPage;
