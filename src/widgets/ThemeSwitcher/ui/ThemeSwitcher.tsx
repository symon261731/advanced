import { classNames } from 'shared/helpers/classNames';
import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'assets/themeLight.svg';
import DarkIcon from 'assets/themeDark.svg';
import { Button, ThemeButton } from 'shared/uikit/Button/Button';
import classes from './ThemeSwitcher.module.scss';

interface Props {
    className?: string;
}

export const ThemeSwitcher = ({ className }: Props) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(classes.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === ETheme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>

    );
};
