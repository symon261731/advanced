import { IStateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (state: IStateSchema) => state.profile?.data || undefined;
export const getProfileError = (state: IStateSchema) => state.profile?.error || '';
export const getProfileForm = (state: IStateSchema) => state.profile?.form || undefined;
export const getIsProfileIsLoading = (state: IStateSchema) => state.profile?.isLoading || false;
export const getProfileReadonly = (state: IStateSchema) => state.profile?.readonly || false;
export const getProfileValidationErrors = (state: IStateSchema) => state.profile?.validateError || [];
