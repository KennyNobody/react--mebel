import classNames from 'classnames';
import { FavoritesList } from '3_features/FavoritesList';
import cls from './FavoritesPage.module.scss';

interface FavoritesPageProps {
    className?: string
}

export const FavoritesPage = (props: FavoritesPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <FavoritesList />
        </div>
    );
};
