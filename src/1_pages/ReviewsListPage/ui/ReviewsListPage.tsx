import classNames from 'classnames';
import { ReviewsList } from '3_features/ReviewsList';
import cls from './ReviewsListPage.module.scss';

interface ReviewsListPageProps {
    className?: string
}

export const ReviewsListPage = (props: ReviewsListPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <ReviewsList />
        </div>
    );
};
