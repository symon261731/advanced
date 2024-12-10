import { memo, useCallback } from 'react';
import { classNames } from 'shared/helpers/classNames';
import { Button } from 'shared/uikit/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'enteties/Article';
import classes from './ArticleDetailsPageHeader.module.scss';
import { getCanEditArticle } from '../../../model/selectors/article';

interface IProps {
 className?: string
}

export const ArticleDetailsPageHeader = memo((props:IProps) => {
    const { className } = props;
    const navigate = useNavigate();
    const { t } = useTranslation();

    const articleDetails = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onCLickReturnToArticleList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onCLickEditArticle = useCallback(() => {
        navigate(`${RoutePath.articles}/${articleDetails?.id}/edit`);
    }, [articleDetails?.id, navigate]);

    return (
        <div className={classNames(classes.ArticleDetailsPageHeader, {}, [className])}>
            <Button onClick={onCLickReturnToArticleList}>{t('<Вернуться')}</Button>
            {canEdit && <Button onClick={onCLickEditArticle}>{t('Редактировать')}</Button>}
        </div>
    );
});

ArticleDetailsPageHeader.displayName = 'ArticleDetailsPageHeader';
