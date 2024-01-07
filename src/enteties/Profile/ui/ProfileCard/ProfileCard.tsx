import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/uikit/Input/Input';
import { ETextAlign, EThemeText, Text } from 'shared/uikit/Text/Text';
import { Loader } from 'shared/uikit/Loader/Loader';
import { Avatar } from 'shared/uikit/Avatar/Avatar';
import { CurrencySelect, ECurrency } from 'enteties/Currency';
import { CountrySelect, ECountry } from 'enteties/Country';
import { IProfile } from '../../model/types/profile';
import classes from './ProfileCard.module.scss';

interface IProps {
    className?: string
    data?: IProfile
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value: string)=>void;
    onChangeLastName?: (value: string)=> void;
    onChangeAge?: (value: string)=> void;
    onChangeCity?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeCurrency?: (value: ECurrency) => void;
    onChangeCountry?: (value: ECountry) => void;
}

export const ProfileCard = memo((props:IProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(classes.ProfileCard, {}, [classes.loading])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(classes.ProfileCard, {}, [classes.error])}>
                <Text
                    align={ETextAlign.CENTER}
                    theme={EThemeText.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                />
            </div>
        );
    }

    return (
        <div className={classNames(classes.ProfileCard, {}, [className])}>
            <div className={classes.data}>
                {data?.avatar && (
                    <div className={classes.avatarWrapper}>
                        <Avatar src={data.avatar} alt={t('Аватар')} size={200} />
                    </div>
                )}
                <Input
                    onChange={(newValue) => onChangeFirstName && onChangeFirstName(newValue)}
                    placeholder={t('Ваше имя')}
                    readOnly={readonly}
                    className={classes.input}
                    value={data?.firstName}
                />
                <Input
                    onChange={(newValue) => onChangeLastName && onChangeLastName(newValue)}
                    placeholder={t('Ваше фамилия')}
                    readOnly={readonly}
                    className={classes.input}
                    value={data?.lastName}
                />
                <Input
                    onChange={(newValue) => onChangeAge && onChangeAge(newValue)}
                    placeholder={t('Ваш возраст')}
                    readOnly={readonly}
                    type="number"
                    className={classes.input}
                    value={String(data?.age)}
                />
                <Input
                    onChange={(newValue) => onChangeCity && onChangeCity(newValue)}
                    readOnly={readonly}
                    placeholder={t('Город')}
                    className={classes.input}
                    value={data?.city}
                />
                <Input
                    onChange={(newValue) => onChangeUsername && onChangeUsername(newValue)}
                    readOnly={readonly}
                    placeholder={t('Имя пользователя')}
                    className={classes.input}
                    value={data?.username}
                />
                {!readonly
                && (
                    <Input
                        onChange={(newValue) => onChangeAvatar && onChangeAvatar(newValue)}
                        readOnly={readonly}
                        placeholder={t('Ссылка на аватар')}
                        className={classes.input}
                        value={data?.avatar}
                    />
                )}
                <CurrencySelect
                    onChange={(newValue) => onChangeCurrency && onChangeCurrency(newValue)}
                    value={data?.currency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    onChange={(newValue) => onChangeCountry && onChangeCountry(newValue)}
                    readonly={readonly}
                />
            </div>
        </div>
    );
});

ProfileCard.displayName = 'ProfileCard';
