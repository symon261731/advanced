import { MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import classes from './PageWrapper.module.scss';

interface IProps{
    children: ReactNode,
    className?: string
    onScrollEnd?: ()=>void;
}

export const PageWrapper = ({ children, className, onScrollEnd }:IProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    });

    return (
        <section ref={wrapperRef} className={classNames(classes.PageWrapper, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
