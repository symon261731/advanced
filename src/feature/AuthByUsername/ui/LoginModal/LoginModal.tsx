import { Modal } from 'shared/uikit/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/uikit/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface IProps {
    isOpen: boolean;
    onClose: ()=>void;
    className?: string;
    lazy?: boolean
}

export const LoginModal = ({
    isOpen, onClose, className, lazy = false,
}:IProps) => (
    <Modal isOpen={isOpen} onClose={onClose} className={className} lazy={lazy}>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync isOpen={isOpen} />
        </Suspense>
    </Modal>
);
