import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { OrdersList } from '3_features/OrdersList';
import { ShowInformer } from '3_features/ShowInformer';
import { getUserRole } from '4_entities/User';
import { InformerArea } from '4_entities/Informer';
import { Title } from '5_shared/ui/Title/Title';
import cls from './OrdersListPage.module.scss';

interface OrdersListPageProps {
    className?: string
}

export const OrdersListPage = (props: OrdersListPageProps) => {
    const { className } = props;
    const userRole = useSelector(getUserRole);

    return (
        <div className={classNames(cls.block, className)}>
            <Title
                text="Мои заказы"
                className={classNames(cls.title)}
            />
            <OrdersList
                className={classNames(cls.feature)}
            />
            <ShowInformer
                mode={userRole === 'client' ? 'client-orders' : 'worker-orders'}
            />
        </div>
    );
};
