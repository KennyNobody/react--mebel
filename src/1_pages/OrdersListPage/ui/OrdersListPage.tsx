import classNames from 'classnames';
import cls from './OrdersListPage.module.scss';

interface OrdersListPageProps {
    className?: string
}

export const OrdersListPage = (props: OrdersListPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Страница моих заказов
        </div>
    );
};
