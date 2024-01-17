import { useContext } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface useThemeResult {
    toggleTheme: ()=> void;
    theme: ETheme;
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: ETheme;

        switch (theme) {
        case ETheme.DARK:
            newTheme = ETheme.LIGHT;
            break;
        case ETheme.LIGHT:
            newTheme = ETheme.PURPLE;
            break;
        case ETheme.PURPLE:
            newTheme = ETheme.DARK;
            break;
        default:
            newTheme = ETheme.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || ETheme.LIGHT,
        toggleTheme,
    };
}
