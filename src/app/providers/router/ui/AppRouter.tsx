import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
    const { t } = useTranslation();

    return (
        <Suspense fallback={(
            <span>
                {t('page loading')}
            </span>
        )}
        >
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />)}
            </Routes>
        </Suspense>
    );
};
