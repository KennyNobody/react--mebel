import classNames from 'classnames';
import cls from './AddingReviewPage.module.scss';

interface AddingReviewPageProps {
    className?: string
}

export const AddingReviewPage = (props: AddingReviewPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Страница добавления отзыва
        </div>
    );
};
