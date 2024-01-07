/* eslint-disable max-len */
import { getUserData } from 'enteties/User';
import { Suspense, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = memo(() => {
    const { t } = useTranslation();

    const isAuth = useSelector(getUserData);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);

    return (
        <Suspense fallback={(
            <span>
                {t('page loading')}
            </span>
        )}
        >
            <Routes>
                {routes.map(({ path, element }) => (<Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />))}
            </Routes>
        </Suspense>
    );
});

AppRouter.displayName = 'AppRouter';
