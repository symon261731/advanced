import {
    ReactNode, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/helpers/classNames';
import { DynamicModuleLoader, TReducerList } from 'shared/lib/components/DynamicModuleLoader';
import { articleDetailsReducer } from 'enteties/Article/model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
    ETextAlign, ETextSize, EThemeText, Text,
} from 'shared/uikit/Text/Text';
import { Skeleton } from 'shared/uikit/Skeleton/Skeleton';
import { Avatar } from 'shared/uikit/Avatar/Avatar';
import EyeSvg from 'assets/eye.svg';
import CalendarSvg from 'assets/calendar.svg';
import { Icon } from 'shared/uikit/Icon/Icon';
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect';
import { EArticleBlockType, TArticleBlock } from '../../model/types/article';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsData';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import classes from './ArticleDetails.module.scss';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';

interface IProps {
 className?: string
 id: string;
}

const reducers: TReducerList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props:IProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: TArticleBlock) => {
        switch (block.type) {
        case EArticleBlockType.TEXT:
            return <ArticleTextBlockComponent key={block.id} className={classes.block} block={block} />;
        case EArticleBlockType.CODE:
            return <ArticleCodeBlockComponent key={block.id} className={classes.block} block={block} />;
        case EArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent key={block.id} className={classes.block} block={block} />;
        default:
            return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content: ReactNode;

    if (isLoading) {
        content = (
            <div className={classes.loadingSkeleton}>
                <Skeleton className={classes.avatar} width={200} height={200} border="50%" />
                <Skeleton className={classes.title} width={300} height={40} />
                <Skeleton className={classes.description} width={500} height={24} />
                <Skeleton className={classes.block} width="100%" height={160} />
                <Skeleton className={classes.block} width="100%" height={160} />
                <Skeleton className={classes.block} width="100%" height={160} />
            </div>
        );
    } else if (error) {
        content = (
            <Text align={ETextAlign.CENTER} theme={EThemeText.ERROR} title={t('Произошла ошибка при загрузке статьи')} />
        );
    } else {
        content = (
            <div className={classes.content}>
                <div className={classes.avatar}>
                    <Avatar size={200} src={data?.img} />
                </div>
                <Text size={ETextSize.L} className={classes.title} title={data?.title} />
                <Text size={ETextSize.L} className={classes.description} text={data?.subtitle} />
                <div className={classes.shortInfo}>
                    <Icon Svg={EyeSvg} className={classes.icon} />
                    <Text text={String(data?.views)} />
                </div>
                <div className={classes.shortInfo}>
                    <Icon Svg={CalendarSvg} className={classes.icon} />
                    <Text text={data?.createAt} />
                </div>
                {data?.blocks.map((block) => renderBlock(block))}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(classes.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

ArticleDetails.displayName = 'ArticleDetails';
