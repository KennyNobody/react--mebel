import classNames from 'classnames';
import Icon from '5_shared/assets/icons/star-rating.svg';
import cls from './RatingIcons.module.scss';

interface RatingIconsProps {
    rating: number;
    className?: string;
}

export const RatingIcons = (props: RatingIconsProps) => {
    const {
        rating,
        className,
    } = props;

    // Округляем рейтинг до целого числа в меньшую сторону
    const roundedRating = Math.floor(rating);

    // Создаем массив с 5 иконками
    const iconsArray = Array.from({ length: 5 }, (_, index) => (
        <Icon
            key={index}
            className={classNames(cls.icon, {
                [cls.active]: index < roundedRating,
            })}
        />
    ));

    return (
        <div className={classNames(cls.block, className)}>
            {iconsArray}
        </div>
    );
};
