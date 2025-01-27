import { createAsyncThunk } from '@reduxjs/toolkit';
import { IThunkConfig } from 'app/providers/StoreProvider';
import { IProfile } from 'enteties/Profile';
import { EValidationError } from '../../types/profile';
import { getProfileForm } from '../../selectors/selectors';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
    IProfile,
    void,
    IThunkConfig<EValidationError[]>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const { extra, rejectWithValue, getState } = thunkApi;

            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<IProfile>(`/profile/${formData?.id}`, formData);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                return rejectWithValue([EValidationError.SERVER_ERROR]);
            }
        },
    );
