import { classNames } from 'shared/helpers/classNames';
import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'assets/themeLight.svg';
import DarkIcon from 'assets/themeDark.svg';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface IProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: IProps) => {
    const { theme, toggleTheme } = useTheme();

    const calcTheme = (theme: ETheme) => (theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />);

    return (
        <Button
            theme={EThemeButton.CLEAR}
            className={classNames(classes.themeswitcher, {}, [className])}
            onClick={toggleTheme}
        >
            { calcTheme(theme)}
        </Button>

    );
};
