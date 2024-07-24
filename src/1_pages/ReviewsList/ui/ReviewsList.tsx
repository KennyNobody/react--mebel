import classNames from 'classnames';
import cls from './ReviewsList.module.scss';

interface ReviewsListProps {
    className?: string
}

export const ReviewsList = (props: ReviewsListProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ReviewsList, className)}>
            Список отзывов
        </div>
    );
};
