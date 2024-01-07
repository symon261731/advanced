import { ECountry } from 'enteties/Country';
import { ECurrency } from 'enteties/Currency';

export interface IProfile {
    firstName? : string;
    lastName? : string;
    age?: number;
    currency?: ECurrency;
    country?: ECountry;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface IProfileSchema {
    data?: IProfile;
    form?: IProfile;
    isLoading: boolean;
    error?: string;
    readonly: boolean
}
