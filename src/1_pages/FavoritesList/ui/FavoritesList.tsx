import classNames from 'classnames';
import cls from './FavoritesList.module.scss';

interface FavoritesListProps {
    className?: string
}

export const FavoritesList = (props: FavoritesListProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.FavoritesList, className)}>
            Список избранного
        </div>
    );
};
