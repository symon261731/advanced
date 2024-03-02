import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IScrollSaveSchema } from '../types/ScrollSaveTypes';

const initialState: IScrollSaveSchema = {
    scroll: {},
};
export const scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{pageName: string, position: number}>) => {
            state.scroll[payload.pageName] = payload.position;
        },
    },
});

export const { actions: scrollSaveActions } = scrollSaveSlice;
export const { reducer: scrollSaveReducer } = scrollSaveSlice;
