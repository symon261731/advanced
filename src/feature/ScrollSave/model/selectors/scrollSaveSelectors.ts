import { IStateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getScrollSelector = (state: IStateSchema) => state.scrollPosition.scroll;

export const getScrollPositionByPage = createSelector(
    getScrollSelector,
    (state: IStateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
