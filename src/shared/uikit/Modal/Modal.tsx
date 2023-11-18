import {
    MouseEvent, ReactNode, memo, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/helpers/classNames';
import classes from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface IProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    title?: string;
    onClose: ()=>void;
}

const ANIMATION_DELAY = 300;

export const Modal = memo(({
    className, children, isOpen = true, onClose, title,
}:IProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

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

    const mods: Record<string, boolean> = {
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

    if (isOpen) {
        return (
            <Portal>
                <div className={classNames(classes.Modal, mods, [className])}>
                    <div className={classes.overlay} onClick={closeWindow}>
                        <div
                            className={classNames(classes.content, { [classes.contentOpened]: isOpen }, [className])}
                            onClick={onContentClick}
                        >
                            {title && <h3 className={classes.title}>{title}</h3>}
                            {children}
                        </div>
                    </div>
                </div>
            </Portal>
        );
    }

    return (
        null
    );
});

Modal.displayName = 'Modal';
