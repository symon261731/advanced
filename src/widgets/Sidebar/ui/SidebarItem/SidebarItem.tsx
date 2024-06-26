import { memo } from 'react';
import { AppLink, TAppLinkTheme } from 'shared/uikit/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserData } from 'enteties/User';
import { ISidebarItem } from '../../model/types/sidebar';

interface IProps {
    item: ISidebarItem
    isOpen?: boolean
}

export const SidebarItem = memo((props:IProps) => {
    const { item, isOpen } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink theme={TAppLinkTheme.INVERTED_SECONDARY} to={item.path}>
            <item.Icon />
            {isOpen && <span>{t(item.text)}</span>}
        </AppLink>
    );
});

SidebarItem.displayName = 'SidebarItem';
