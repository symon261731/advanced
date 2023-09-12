import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/helpers/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export default function App () {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <ThemeSwitcher currentTheme={theme} onClick={toggleTheme}/>
        </div>
    )
}


