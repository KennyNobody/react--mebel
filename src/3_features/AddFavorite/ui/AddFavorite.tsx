import classNames from 'classnames';
import {ButtonFavorite, FavoriteMode, FavoriteType} from '4_entities/Favorite';
import cls from './AddFavorite.module.scss';

interface AddFavoriteProps {
    id: number;
    mode: FavoriteMode;
    type: FavoriteType;
    className?: string;
}

export const AddFavorite = (props: AddFavoriteProps) => {
    const {
        id,
        mode,
        type,
        className,
    } = props;

    return (
        <div className={classNames(cls.AddFavorite, className)}>
            <ButtonFavorite
                clickEvent={() => alert(`Удалили из избранного ${id}`)}
            />
        </div>
    );
};
