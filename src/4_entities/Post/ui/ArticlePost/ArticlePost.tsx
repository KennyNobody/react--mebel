import classNames from 'classnames';
import { PostArticleType } from '../../model/types/PostArticle';

interface ArticlePostProps {
    className?: string;
    data?: PostArticleType;
}

export const ArticlePost = (props: ArticlePostProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(className)}>
            { data?.title }
        </div>
    );
};
