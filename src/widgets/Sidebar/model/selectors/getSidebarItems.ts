import { createSelector } from '@reduxjs/toolkit';
import { getUserData } from 'enteties/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainSvg from 'assets/mainPage.svg';
import AboutSvg from 'assets/aboutPage.svg';
import ProfileSvg from 'assets/profilePage.svg';
import ArticlePage from 'assets/articlePage.svg';
import { ISidebarItem } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserData,
    (userData) => {
        const sidebarItemsList: ISidebarItem[] = [
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
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: `${RoutePath.profile}${userData.id}`,
                    Icon: ProfileSvg,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlePage,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },

);
