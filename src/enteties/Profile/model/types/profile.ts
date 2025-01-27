import { ECountry } from 'enteties/Country';
import { ECurrency } from 'enteties/Currency';

export enum EValidationError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface IProfile {
    id?: string;
    firstName? : string;
    lastName? : string;
    age?: number;
    currency?: ECurrency;
    country?: ECountry;
    city?: string;
    username?: string;
    avatar?: string;
}
