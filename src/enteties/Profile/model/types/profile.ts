import { ECountry, ECurrency } from 'shared/const/common';

export interface IProfile {
    firstName : string;
    lastName : string;
    age: number;
    currency: ECurrency;
    country: ECountry;
    city: string;
    username: string;
    avatar: string;
}

export interface IProfileSchema {
    data?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean
}
