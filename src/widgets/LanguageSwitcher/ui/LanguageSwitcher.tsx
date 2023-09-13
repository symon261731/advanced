import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames';
import { Button, ThemeButton } from 'shared/uikit/Button/Button';
import classes from './LanguageSwitcher.module.scss';

interface Props {
    className?: string
}

export const LanguageSwitcher = ({ className }: Props) => {
    const { i18n, t } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(classes.lngswitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={changeLanguage}
        >
            {t('Язык')}
        </Button>
    );
};