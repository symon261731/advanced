import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Avatar.module.scss';

interface IProps {
 className?: string;
 src?: string;
 size?: number;
 alt?: string
}

export const Avatar = memo((props:IProps) => {
    const {
        className, src, size, alt,
    } = props;

    const styles: CSSProperties = useMemo(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img
            src={src}
            style={styles}
            alt={alt}
            className={classNames(classes.Avatar, {}, [className])}
        />
    );
});

Avatar.displayName = 'Avatar';
