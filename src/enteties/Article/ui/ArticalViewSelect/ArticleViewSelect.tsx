import { memo } from 'react';
import { Button, EThemeButton } from 'shared/uikit/Button/Button';
import { classNames } from 'shared/helpers/classNames';
import ListSvg from 'assets/list.svg';
import BoxSvg from 'assets/tiled.svg';
import { EArticleView } from '../../model/types/article';
import classes from './ArticleViewSelect.module.scss';

const viewTypes = [
    {
        viewType: EArticleView.BIG,
        icon: <ListSvg />,
    },
    {
        viewType: EArticleView.SMALL,
        icon: <BoxSvg />,
    },
];

interface IProps {
    view: EArticleView;
    className?: string;
    onClick?: (newView: EArticleView)=>void;
}

export const ArticleViewSelect = memo(({ view, className, onClick }:IProps) => {
    const onClickHandler = (newView: EArticleView) => () => {
        onClick?.(newView);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {
                viewTypes.map(({ viewType, icon }) => (
                    <Button
                        key={viewType}
                        theme={EThemeButton.CLEAR}
                        className={classNames(classes.option, { [classes.isCurrent]: viewType === view }, [])}
                        onClick={onClickHandler(viewType)}
                    >
                        {icon}
                    </Button>
                ))
            }
        </div>
    );
});

ArticleViewSelect.displayName = 'ArticleViewSelect';
