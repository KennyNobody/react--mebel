import classNames from 'classnames';
import cls from './AddingOrderPage.module.scss';

interface AddingOrderPageProps {
    className?: string
}

export const AddingOrderPage = (props: AddingOrderPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.AddingOrderPage, className)}>
            Страница добавления заказа
        </div>
    );
};
