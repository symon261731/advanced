import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/helpers/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export default function App () {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className='content-page'>
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    )
}


