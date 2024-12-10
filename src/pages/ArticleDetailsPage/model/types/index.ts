import { IArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { IArticleDetailsRecommentationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface IArticleDetailsPageSchema {
    comments: IArticleDetailsCommentsSchema;
    recommendations: IArticleDetailsRecommentationsSchema;
}
