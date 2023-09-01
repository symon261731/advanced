import './styles/index.scss';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/helpers/classNames';
import { AppRouter } from './providers/router';

export default function App () {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>
            <button onClick={toggleTheme}>theme</button>
            
            <AppRouter/>
        </div>
    )
}


