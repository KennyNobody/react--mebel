import { memo } from 'react';
import classNames from 'classnames';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './ArticleTag.module.scss';
import { ArticleCategoryType } from '../../model/types/ArticleCategory';

interface ArticleTagProps {
    data: ArticleCategoryType;
    className?: string;
    themeProp?: AppTheme;
}

export const ArticleTag = memo((props: ArticleTagProps) => {
    const {
        data,
        className,
        themeProp,
    } = props;

    const { theme } = useTheme();

    return (
        <span
            className={
                classNames(
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        >
            #
            { data.title }
        </span>
    );
});
