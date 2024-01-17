/* eslint-disable max-len */
import {
    Suspense, memo, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/uikit/Loader/Loader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={(
                <Loader />
            )}
            >
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={(route.authOnly ? <RequireAuth>{element}</RequireAuth> : element)}
            />
        );
    }, []);

    return (

        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
});

AppRouter.displayName = 'AppRouter';
