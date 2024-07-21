import { memo } from 'react';
import classNames from 'classnames';
import grid from '5_shared/css/grid.module.scss';
import cls from './GridPhoto.module.scss';
import { ArticlePhoto } from '../ArticlePost/ArticlePhoto';
import { ArticlePhotoType } from '../../model/types/ArticlePhoto';

interface GridPostsProps {
    className?: string;
    data?: ArticlePhotoType[];
}

export const GridPhoto = memo((props: GridPostsProps) => {
    const {
        data,
        className,
    } = props;

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticlePhotoType, index: number) => (
            <div
                key={index}
                className={classNames(grid['grid__col-2'])}
            >
                <ArticlePhoto
                    data={item}
                />
            </div>
        ))
    );

    return (
        <div className={classNames(cls.block)}>
            <div className={classNames(grid.grid, cls.grid, className)}>
                { content }
            </div>
        </div>
    );
});
