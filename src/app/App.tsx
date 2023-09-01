import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense} from 'react';
import { AboutPage } from 'pages/AboutPage/index';
import { MainPage } from 'pages/MainPage/index';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/helpers/classNames';

export default function App () {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>
            <button onClick={toggleTheme}>theme</button>

            <Suspense fallback={<span>идет загрузка страницы</span>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}


