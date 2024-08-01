import classNames from 'classnames';
import { OrderDetail } from '2_widgets/OrderDetail';
import cls from './OrderDetailPage.module.scss';

interface OrderDetailProps {
    className?: string
}

export const OrderDetailPage = (props: OrderDetailProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <OrderDetail />
        </div>
    );
};
