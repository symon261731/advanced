import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAddCommentFormSchema } from '../types/addComment';

const initialState: IAddCommentFormSchema = {
    error: undefined,
    text: '',
};

export const addCommentSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {

    },
});

export const {
    actions: addCommentFormActions,
    reducer: addCommentFormReducer,
} = addCommentSlice;
