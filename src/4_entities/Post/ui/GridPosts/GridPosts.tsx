import classNames from 'classnames';
import { End } from '5_shared/ui/End/End';
import grid from '5_shared/css/grid.module.scss';
import { AppTheme } from '5_shared/config/ThemeContext';
import cls from './GridPosts.module.scss';
import { ArticlePost } from '../ArticlePost/ArticlePost';
import { PostArticleType } from '../../model/types/PostArticle';

interface GridPostsProps {
    className?: string;
    data?: (PostArticleType | null)[];
    showSkeleton?: boolean;
    showEnd: boolean;
}

export const GridPosts = (props: GridPostsProps) => {
    const {
        data,
        showSkeleton,
        className,
        showEnd,
    } = props;

    const skeleton = (
        new Array(12).fill(null).map((_, index) => (
            <div
                key={index}
                className={
                    classNames(
                        grid['grid__col-1'],
                        grid['grid__col-mob-2'],
                        grid['grid__col-x-mob-4'],
                    )
                }
            >
                <ArticlePost />
            </div>
        ))
    );

    const content = (
        data
        && data?.length > 0
        && data.map((item: PostArticleType | null, index: number) => {
            let propTheme;

            if (item?.main?.showPreview) {
                propTheme = item?.main?.previewInverted
                    ? AppTheme.DARK
                    : AppTheme.LIGHT;
            }

            return (
                <div
                    key={index}
                    className={
                        classNames(
                            grid['grid__col-1'],
                            grid['grid__col-mob-2'],
                            {
                                [grid['grid__col-x-mob-4']]: item,
                            },
                            {
                                [cls['mobile-hidden']]: !item,
                            },
                        )
                    }
                >
                    {
                        item
                        && (
                            <ArticlePost
                                data={item}
                                themeProp={propTheme}
                            />
                        )
                    }
                </div>
            );
        })
    );

    return (
        <div className={classNames(cls.block)}>
            <div className={classNames(grid.grid, cls.grid, className)}>
                { showSkeleton ? skeleton : content }
            </div>
            {showEnd && <End />}
        </div>
    );
};
