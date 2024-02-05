import { memo, useCallback } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { Input } from 'shared/uikit/Input/Input';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { getCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentSlice';
import classes from './AddCommentForm.module.scss';

const reducers: TReducerList = {
    addNewCommentForm: addCommentFormReducer,
};

interface IProps {
 className?: string;
 onSendComment: (text:string)=> void;
}

const AddCommentForm = memo(({ className, onSendComment }:IProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const text = useSelector(getCommentFormText);

    const onChangeTextHandler = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendCommentHandler = useCallback(() => {
        onSendComment(text || '');
        onChangeTextHandler('');
    }, [onChangeTextHandler, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('', {}, [className])}>
                <form className={classes.form}>
                    <Input
                        onChange={(value) => onChangeTextHandler(value)}
                        value={text}
                        placeholder={t('Введите комментарий')}
                    />
                    <Button onClick={onSendCommentHandler} theme={EThemeButton.OUTLINE}>{t('Отправить')}</Button>
                </form>
            </div>
        </DynamicModuleLoader>
    );
});

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
