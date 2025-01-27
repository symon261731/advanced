import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ETextSize, EThemeText, Text } from 'shared/uikit/Text/Text';
import { ArticleList, EArticleView } from 'enteties/Article';
import { classNames } from 'shared/helpers/classNames';
import classes from './ArticleRecommendationList.module.scss';
import { useGetRecommendationsQuery } from '../api/articleRecommendationsApi';

interface IProps {
 className?: string
}

export const ArticleRecommendationList = memo((props:IProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const { data: articles, isFetching, isError } = useGetRecommendationsQuery(4);

    if (isError) {
        return (
            <Text theme={EThemeText.ERROR} title={t('произошла ошибка')} />
        );
    }

    return (
        <div className={classNames(classes.ArticleRecommendationList, {}, [className])}>
            <Text className={classes.blockTitle} title={t('Рекомендуем')} size={ETextSize.L} />
            <ArticleList
                target="_blank"
                view={EArticleView.SMALL}
                articles={articles}
                isLoading={isFetching}
            />
        </div>
    );
});

ArticleRecommendationList.displayName = 'ArticleRecommendationList';
