import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOTFOUND = 'not found',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + id непосредственно в routeConfig
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/', // +id непосредственно в routeConfig
    [AppRoutes.ARTICLE_CREATE]: '/articles/create',
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.NOTFOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage />,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPage />,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath['not found'],
        element: <NotFoundPage />,
    },
};
