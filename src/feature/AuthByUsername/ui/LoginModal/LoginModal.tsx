import { Modal } from 'shared/uikit/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
        <LoginForm />
    </Modal>
);
