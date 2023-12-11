import { memo } from 'react';
import { AppLink, TAppLinkTheme } from 'shared/uikit/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { ISidebarItem } from '../../model/items';

interface IProps {
    item?: ISidebarItem
    isOpen?: boolean
}

export const SidebarItem = memo((props:IProps) => {
    const { item, isOpen } = props;
    const { t } = useTranslation();

    return (
        <AppLink theme={TAppLinkTheme.INVERTED_SECONDARY} to={item.path}>
            <item.Icon />
            {isOpen && <span>{t(item.text)}</span>}
        </AppLink>
    );
});

SidebarItem.displayName = 'SidebarItem';
