import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<string>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const formData = getProfileForm(getState());

            try {
                const response = await extra.api.put<IProfile>('/profile', formData);
                return response.data;
            } catch (e) {
                console.log(e);

                return rejectWithValue('error');
            }
        },
    );
