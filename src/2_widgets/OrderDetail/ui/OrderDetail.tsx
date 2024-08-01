import classNames from 'classnames';
import { OrderChat } from '3_features/OrderChat';
import { OrderSelectContractor } from '3_features/OrderSelectContractor';
import {
    OrderInfo,
    ordersList,
    ArticleOrder,
    OrderStatusForm,
} from '4_entities/Order';
import cls from './OrderDetail.module.scss';

interface OrderDetailProps {
    className?: string
}

export const OrderDetail = (props: OrderDetailProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <ArticleOrder
                mode="static"
                data={ordersList[0]}
            />
            <OrderInfo
                data={ordersList[0]}
            />
            <OrderSelectContractor />
            <OrderStatusForm />
            <OrderChat />
        </div>
    );
};
