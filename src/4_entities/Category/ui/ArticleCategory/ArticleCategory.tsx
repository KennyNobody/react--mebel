import { memo } from 'react';
import classNames from 'classnames';
import cls from './ArticleCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ArticleCategoryProps {
    name?: string;
    className?: string;
    isActive?: boolean;
    data?: ArticleCategoryType;
}

export const ArticleCategory = memo((props: ArticleCategoryProps) => {
    const {
        data,
        className,
    } = props;

    const content = (
        <p
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            {data?.title}
        </p>
    );

    return content;
});
