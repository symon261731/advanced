import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/helpers/classNames';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';

interface Props {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = ({ className, short }: Props) => {
    const { i18n, t } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('ad', {}, [className])}
            theme={EThemeButton.CLEAR_INVERTED}
            onClick={changeLanguage}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
