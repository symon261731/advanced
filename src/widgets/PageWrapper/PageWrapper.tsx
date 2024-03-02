import {
    MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { classNames } from 'shared/helpers/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getScrollPositionByPage, scrollSaveActions } from 'feature/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { IStateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import classes from './PageWrapper.module.scss';

interface IProps{
    children: ReactNode,
    className?: string
    onScrollEnd?: ()=>void;
}

export const PageWrapper = ({ children, className, onScrollEnd }:IProps) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    const scrollPosition = useSelector((state:IStateSchema) => getScrollPositionByPage(state, pathname));

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({ pageName: pathname, position: e.currentTarget.scrollTop }));
    }, 3000);

    useInfiniteScroll({
        callback: onScrollEnd,
        triggerRef,
        wrapperRef,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <section
            ref={wrapperRef}
            className={classNames(classes.PageWrapper, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            <div ref={triggerRef} />
        </section>
    );
};
