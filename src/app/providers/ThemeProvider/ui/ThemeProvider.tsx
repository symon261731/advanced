import { FC, useMemo, useState } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;

interface IProps {
    initialTheme?: ETheme;
}

const ThemeProvider: FC<IProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);
    document.body.className = initialTheme || theme;

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
