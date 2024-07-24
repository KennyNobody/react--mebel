import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { memo, useMemo } from 'react';
import { AppTheme } from '5_shared/config/ThemeContext';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './ArticlePhoto.module.scss';
import { ArticlePhotoType } from '../../model/types/ArticlePhoto';

interface ArticlePhotoProps {
    className?: string;
    themeProp?: AppTheme;
    data?: ArticlePhotoType;
}

export const ArticlePhoto = memo((props: ArticlePhotoProps) => {
    const {
        data,
        themeProp,
        className,
    } = props;

    const article = useMemo(() => (
        <Link
            to={`/#/`}
            className={
                classNames(
                    cls.article,
                    className,
                )
            }
        >
            <h3
                className={
                    classNames(
                        cls.title,
                    )
                }
            >
                {data?.main?.previewTitle}
            </h3>
        </Link>
    ), [className, data, themeProp]);

    return article;
});
