import { FC, useMemo, useState } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme || ETheme.LIGHT;

interface IProps {
    initialTheme?: ETheme;
}

const ThemeProvider: FC<IProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<ETheme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme: () => setTheme(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT),
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
