import { useContext } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface useThemeResult {
    toggleTheme: ()=> void;
    theme: ETheme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = (theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT);
        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || ETheme.LIGHT,
        toggleTheme,
    };
}
