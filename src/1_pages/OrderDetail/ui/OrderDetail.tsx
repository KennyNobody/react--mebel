import classNames from 'classnames';
import cls from './OrderDetail.module.scss';

interface OrderDetailProps {
    className?: string
}

export const OrderDetail = (props: OrderDetailProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.OrderDetail, className)}>
            Одиночная страница заказа
        </div>
    );
};
