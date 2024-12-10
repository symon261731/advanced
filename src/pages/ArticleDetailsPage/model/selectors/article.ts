import { createSelector } from '@reduxjs/toolkit';
import { getArticleDetailsData } from 'enteties/Article';
import { getUserData } from 'enteties/User';

export const getCanEditArticle = createSelector(
    getArticleDetailsData,
    getUserData,
    (article, user) => article?.user.id === user?.id,

);
