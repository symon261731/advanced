import { classNames } from "shared/helpers/classNames";
import { ETheme } from "app/providers/ThemeProvider";
import classes from './ThemeSwitcher.module.scss';
import LightIcon from 'assets/themeLight.svg';
import DarkIcon from 'assets/themeDark.svg';
import { Button, ThemeButton } from "shared/uikit/Button/Button";

interface Props  {
    className?: string;
    onClick: ()=>void;
    currentTheme: ETheme;
}

export const ThemeSwitcher = ({className, onClick, currentTheme }: Props) => {

    return (
        <Button
            theme={ThemeButton.CLEAR} 
            className={classNames(classes.ThemeSwitcher, {}, [className])} 
            onClick={()=> onClick()}
        >
            {currentTheme === ETheme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>

    )
}