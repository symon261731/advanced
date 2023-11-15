import { classNames } from 'shared/helpers/classNames';
import { FC } from 'react';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => (
    <div className={classNames(classes.navbar, {}, [className])} />
);
