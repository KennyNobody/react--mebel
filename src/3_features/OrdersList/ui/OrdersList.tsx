import classNames from 'classnames';
import {
    OrderType,
    ordersList,
    ArticleOrder,
} from '4_entities/Order';
import cls from './OrdersList.module.scss';

interface OrdersListProps {
    className?: string;
}

export const OrdersList = (props: OrdersListProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <div className={classNames(cls.list)}>
                {
                    ordersList.map((item: OrderType) => (
                        <ArticleOrder
                            data={item}
                            mode="link"
                            key={item.id}
                        />
                    ))
                }
            </div>
        </div>
    );
};
