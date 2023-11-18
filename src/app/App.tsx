/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/helpers/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

export default function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="загрузка перевода">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
