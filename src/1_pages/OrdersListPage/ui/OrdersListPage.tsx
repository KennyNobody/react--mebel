import classNames from 'classnames';
import { Informer } from '3_features/Informer';
import { OrdersList } from '3_features/OrdersList';
import { Title } from '5_shared/ui/Title/Title';
import cls from './OrdersListPage.module.scss';

interface OrdersListPageProps {
    className?: string
}

export const OrdersListPage = (props: OrdersListPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <Title
                text="Мои заказы"
                className={classNames(cls.title)}
            />
            <OrdersList
                className={classNames(cls.feature)}
            />
            <Informer />
        </div>
    );
};
