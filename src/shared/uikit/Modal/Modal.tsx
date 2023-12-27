import {
    MouseEvent, MutableRefObject, ReactNode, memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { TMods, classNames } from 'shared/helpers/classNames';
import classes from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface IProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: ()=>void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = memo(({
    className, children, isOpen = true, onClose, lazy = false,
}:IProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const closeWindow = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDownHandler = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeWindow();
        }
    }, [closeWindow]);

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const mods: TMods = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDownHandler);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDownHandler);
        };
    }, [isOpen, onKeyDownHandler]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    if (lazy && isMounted === false) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(classes.Modal, mods, [className])}>
                <div className={classes.overlay} onClick={closeWindow}>
                    <div
                        className={classNames(classes.content, { [classes.contentOpened]: isOpen }, [className])}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
});

Modal.displayName = 'Modal';
