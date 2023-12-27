import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IThunkExtraArgs } from 'app/providers/StoreProvider/config/StateSchema';
import { IUser } from 'enteties/User';
import { userActions } from 'enteties/User/model/slice/userSlice';
import { USER_LOCAlSTORAGE_KEY } from 'shared/const/localStorage';

interface ILoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, IThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post<IUser>('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(response.data));

            localStorage.setItem(USER_LOCAlSTORAGE_KEY, JSON.stringify(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
