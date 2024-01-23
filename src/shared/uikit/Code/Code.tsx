import { memo, useCallback } from 'react';
import { classNames } from 'shared/helpers/classNames';
import CopySvg from 'assets/copy.svg';
import classes from './Code.module.scss';
import { Button, EThemeButton } from '../Button/Button';

interface IProps {
 className?: string;
 text: string;
}

export const Code = memo((props:IProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(classes.Code, {}, [className])}>
            <Button onClick={onCopy} theme={EThemeButton.CLEAR} className={classes.copyButton}>
                <CopySvg className={classes.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});

Code.displayName = 'Code';
