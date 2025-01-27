import { IProfile } from 'enteties/Profile';
import { EValidationError } from '../../types/profile';

export const validateProfileData = (profile?: IProfile) => {
    if (!profile) {
        return [EValidationError.NO_DATA];
    }

    const {
        firstName, lastName, country, age,
    } = profile;
    const errors: EValidationError[] = [];

    if (!firstName || !lastName) {
        errors.push(EValidationError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(EValidationError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(EValidationError.INCORRECT_COUNTRY);
    }

    return errors;
};
