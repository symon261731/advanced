import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from 'enteties/User';
import { userActions } from 'enteties/User/model/slice/userSlice';
import { USER_LOCAlSTORAGE_KEY } from 'shared/const/localStorage';

interface ILoginByUsernameProps {
    username: string;
    password: string;
}

enum ELoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = ''
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error();
            }

            thunkApi.dispatch(userActions.setAuthData(response.data));

            localStorage.setItem(USER_LOCAlSTORAGE_KEY, JSON.stringify(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkApi.rejectWithValue('error');
        }
    },
);
