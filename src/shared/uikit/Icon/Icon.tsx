import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Icon.module.scss';

interface IProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props:IProps) => {
    const { className, Svg } = props;
    return (
        <Svg className={classNames(classes.Icon, {}, [className])} />
    );
});

Icon.displayName = 'Icon';
