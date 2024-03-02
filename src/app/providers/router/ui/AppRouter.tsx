/* eslint-disable max-len */
import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/uikit/Loader/Loader';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={(
                <PageWrapper>
                    <div style={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    >
                        <Loader />
                    </div>

                </PageWrapper>
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
