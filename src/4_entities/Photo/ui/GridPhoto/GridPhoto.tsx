import { memo } from 'react';
import classNames from 'classnames';
import { End } from '5_shared/ui/End/End';
import grid from '5_shared/css/grid.module.scss';
import { AppTheme } from '5_shared/config/ThemeContext';
import cls from './GridPhoto.module.scss';
import { ArticlePhoto } from '../ArticlePost/ArticlePhoto';
import { ArticlePhotoType } from '../../model/types/ArticlePhoto';

interface GridPostsProps {
    className?: string;
    data?: ArticlePhotoType[];
    showSkeleton?: boolean;
    showEnd: boolean;
}

export const GridPhoto = memo((props: GridPostsProps) => {
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
                className={classNames(grid['grid__col-2'], grid['grid__col-mob-4'])}
            >
                <ArticlePhoto />
            </div>
        ))
    );

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticlePhotoType, index: number) => {
            let propTheme;

            if (item?.main?.showPreview) {
                propTheme = item?.main?.previewInverted
                    ? AppTheme.DARK
                    : AppTheme.LIGHT;
            }

            return (
                <div
                    key={index}
                    className={classNames(grid['grid__col-2'], grid['grid__col-mob-4'])}
                >
                    <ArticlePhoto
                        data={item}
                        themeProp={propTheme}
                    />
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
});
