import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AddFavorite } from '3_features/AddFavorite';
import { PersonType } from '4_entities/Person';
import IconFavorite from '5_shared/assets/icons/star-half.svg';
import cls from './ArticlePersonFavorite.module.scss';
import {RatingString} from "5_shared/ui/RatingString/RatingString";

interface ArticlePersonFavoriteProps {
    className?: string;
    data: PersonType;
}

export const ArticlePersonFavorite = (props: ArticlePersonFavoriteProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Link to={data.link} className={classNames(cls.picture)}>
                <img src={data.picture} alt={`${data.surname} ${data.name}`} />
            </Link>
            <div className={classNames(cls.main)}>
                <Link to={data.link} className={classNames(cls.name)}>
                    { `${data.surname} ${data.name}` }
                </Link>
                <RatingString
                    rating={data.rating}
                    className={classNames(cls.rating)}
                />
            </div>
            <div className={classNames(cls.controls)}>
                <AddFavorite
                    id={data.id}
                    mode="remove"
                    type="worker"
                />
            </div>
        </div>
    );
};
