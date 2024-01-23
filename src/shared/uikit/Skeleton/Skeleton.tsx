import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Skeleton.module.scss';

interface IProps {
 className?: string;
 height?: string | number;
 width?: string | number;
 border?: string;
}

export const Skeleton = memo((props:IProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div className={classNames(classes.Skeleton, {}, [className])} style={styles} />
    );
});

Skeleton.displayName = 'Skeleton';
