import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/helpers/classNames';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

interface IProps {
 className?: string
}

const ArticleEditPage = memo((props:IProps) => {
    const { className } = props;
    const { id } = useParams();
    const isEditMode = Boolean(id);

    return (
        <PageWrapper className={classNames('', {}, [className])}>
            {id ? 'editPage' : 'createpage'}
        </PageWrapper>
    );
});

ArticleEditPage.displayName = 'ArticleEditPage';

export default ArticleEditPage;
