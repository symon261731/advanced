import { SVGProps, VFC } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainSvg from 'assets/mainPage.svg';
import AboutSvg from 'assets/aboutPage.svg';
import ProfileSvg from 'assets/profilePage.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: VFC<SVGProps<SVGAElement>>
}

export const SidebarItemsList: ISidebarItem[] = [
    {
        path: RoutePath.main,
        Icon: MainSvg,
        text: 'Главная',
    },
    {
        path: RoutePath.about,
        Icon: AboutSvg,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileSvg,
        text: 'Профиль',
    },
];