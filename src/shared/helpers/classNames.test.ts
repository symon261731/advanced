import { classNames } from 'shared/helpers/classNames';

describe('classNames', () => {
    it('test №1', () => {
        expect(classNames('one', { two: false }, ['three', 'four'])).toEqual('one three four');
    });
});
