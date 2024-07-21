import { memo } from 'react';
import classNames from 'classnames';
import {
    ArticleCategory,
} from '../ArticleCategory/ArticleCategory';
import cls from './GridCategory.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface GridCategoryProps {
    className?: string;
    data: ArticleCategoryType[];
}

export const GridCategory = memo((props: GridCategoryProps) => {
    const {
        data,
        className,
    } = props;

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticleCategoryType) => (
            <ArticleCategory
                data={item}
                key={item.id}
            />
        ))
    );

    return (
        <div className={classNames(cls.block, className)}>
            { content }
        </div>
    );
});
