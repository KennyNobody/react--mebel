import { useMemo } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { GridCategory } from '4_entities/Category';
import grid from '5_shared/css/grid.module.scss';
import Icon from '5_shared/assets/icons/arrow-next.svg';
import { RouterPath } from '5_shared/config/router/routerConfig';
import cls from './ArticleDev.module.scss';
import { ArticleDevType } from '../../model/types/ArticleDev';

interface ArticleDevProps {
    className?: string;
    data?: ArticleDevType;
}

export const ArticleDev = (props: ArticleDevProps) => {
    const {
        data,
        className,
    } = props;

    const content = useMemo(() => (
        <Link
            to="/#/"
            className={
                classNames(
                    cls.block,
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
                            )
                        }
                    />
                </div>
                <div className={classNames(grid['grid__col-2'], grid['grid__col-mob-4'])}>
                    <div className={classNames(cls.main)}>
                        <GridCategory
                            data={data?.tags?.data || []}
                        />
                        <Icon
                            className={
                                classNames(
                                    cls.icon,
                                )
                            }
                        />
                    </div>
                </div>
            </div>
        </Link>
    ), [data]);

    return content;
};
