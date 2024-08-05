import classNames from 'classnames';
import IconFavorite from '5_shared/assets/icons/star-half.svg';
import cls from './RatingString.module.scss';

interface RatingStringProps {
    rating: number;
    className?: string;
}

export const RatingString = (props: RatingStringProps) => {
    const {
        rating,
        className,
    } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <IconFavorite
                className={classNames(cls.icon)}
            />
            <span className={classNames(cls.ratingText)}>
                Рейтинг
            </span>
            <span className={classNames(cls.ratingCount)}>
                { rating }
            </span>
        </div>
    );
};
