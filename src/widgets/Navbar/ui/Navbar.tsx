import { classNames } from 'shared/helpers/classNames';
import { FC, useCallback, useState } from 'react';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/uikit/Modal/Modal';
import classes from './Navbar.module.scss';

interface IProps {
    className?: string;
}

export const Navbar: FC<IProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setisAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setisAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(classes.navbar, {}, [className])}>
            <Button onClick={onToggleModal} theme={EThemeButton.CLEAR_INVERTED}>{t('Войти')}</Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                123
            </Modal>
        </div>
    );
};
