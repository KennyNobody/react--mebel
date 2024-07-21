import classNames from 'classnames';
import cls from './ListCategory.module.scss';
import { ArticleCategory } from '../ArticleCategory/ArticleCategory';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ListCategoryProps {
    className?: string;
    selectedItem: number | undefined;
    data: ArticleCategoryType[] | undefined;
}

export const ListCategory = (props: ListCategoryProps) => {
    const {
        data,
        className,
        selectedItem,
    } = props;

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticleCategoryType) => (
            <ArticleCategory
                data={item}
                key={item.id}
                name="category"
                isActive={selectedItem === item.id}
            />
        ))
    );

    return (
        <form className={classNames(cls.nav, className)}>
            { content }
        </form>
    );
};
