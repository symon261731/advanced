import { MutableRefObject, useEffect, useRef } from 'react';

interface IUseInfiniteScrollOptions {
    callback?: ()=> void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
    callback, triggerRef, wrapperRef,
}: IUseInfiniteScrollOptions) => {
    // const observer = useRef<IntersectionObserver | null>(null);
    let observer: IntersectionObserver | null = null;

    useEffect(() => {
        const trigerElement = triggerRef.current;
        const wrapperElement = wrapperRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            // eslint-disable-next-line react-hooks/exhaustive-deps
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(trigerElement);
        }

        return () => {
            if (observer) {
                observer.unobserve(trigerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
