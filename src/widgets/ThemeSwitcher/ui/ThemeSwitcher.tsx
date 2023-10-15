import { classNames } from 'shared/helpers/classNames';
import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'assets/themeLight.svg';
import DarkIcon from 'assets/themeDark.svg';
import { Button, ThemeButton } from 'shared/uikit/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface Props {
    className?: string;
    themeForStorybook?: ETheme
}

export const ThemeSwitcher = ({ className, themeForStorybook }: Props) => {
    const { theme, toggleTheme } = useTheme();

    const calcTheme = (theme: ETheme) => (theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />);

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.themeswitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {themeForStorybook ? calcTheme(themeForStorybook) : calcTheme(theme)}
        </Button>

    );
};
