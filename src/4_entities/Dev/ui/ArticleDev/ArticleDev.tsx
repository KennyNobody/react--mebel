import { useMemo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { GridCategory } from '4_entities/Category';
import grid from '5_shared/css/grid.module.scss';
import Icon from '5_shared/assets/icons/arrow-next.svg';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import { RouterPath } from '5_shared/config/router/routerConfig';
import { Skeleton, SkeletonMode } from '5_shared/ui/Skeleton/Skeleton';
import cls from './ArticleDev.module.scss';
import { ArticleDevType } from '../../model/types/ArticleDev';

interface ArticleDevProps {
    className?: string;
    themeProp?: AppTheme;
    data?: ArticleDevType;
}

export const ArticleDev = (props: ArticleDevProps) => {
    const {
        data,
        themeProp,
        className,
    } = props;

    const { theme } = useTheme();

    const skeleton = useMemo(() => (
        <Skeleton
            mode={SkeletonMode.BLOCK}
            className={
                classNames(
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                )
            }
        />
    ), [data, themeProp, theme]);

    const content = useMemo(() => (
        <Link
            to={`${RouterPath.dev_detail}${data?.id}`}
            className={
                classNames(
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        >
            <div className={classNames(grid.grid, cls.grid)}>
                <div className={classNames(grid['grid__col-2'], grid['grid__col-mob-3'])}>
                    <h3 className={classNames(cls.title)}>
                        { data?.title }
                    </h3>
                </div>
                <div className={classNames(grid['grid__col-mob-1'], cls['cell-mobile'])}>
                    <Icon
                        className={
                            classNames(
                                cls.icon,
                                cls['icon--mobile'],
                                cls[`icon--${themeProp || theme}`],
                            )
                        }
                    />
                </div>
                <div className={classNames(grid['grid__col-2'], grid['grid__col-mob-4'])}>
                    <div className={classNames(cls.main)}>
                        <GridCategory
                            showSkeleton={false}
                            data={data?.tags?.data || []}
                        />
                        <Icon
                            className={
                                classNames(
                                    cls.icon,
                                    cls['icon--desktop'],
                                    cls[`icon--${themeProp || theme}`],
                                )
                            }
                        />
                    </div>
                </div>
            </div>
        </Link>
    ), [data, themeProp, theme]);

    return data ? content : skeleton;
};
