import classNames from 'classnames';
import {
    OrderType,
    ordersList,
    ArticleOrder,
} from '4_entities/Order';
import { ButtonNav } from '5_shared/ui/ButtonNav/ButtonNav';
import { Pagination } from '5_shared/ui/Pagination/Pagination';
import { TabsWrapper } from '5_shared/ui/TabsWrapper/TabsWrapper';
import cls from './OrdersList.module.scss';

interface OrdersListProps {
    className?: string;
}

export const OrdersList = (props: OrdersListProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            <TabsWrapper className={classNames(cls.nav)}>
                <ButtonNav
                    isActive
                    caption="Все"
                    clickEvent={() => console.log('Пык')}
                />
                <ButtonNav
                    caption="Текущие"
                    clickEvent={() => console.log('Пык')}
                />
                <ButtonNav
                    caption="Выполненные"
                    clickEvent={() => console.log('Пык')}
                />
                <ButtonNav
                    caption="Отмененные"
                    clickEvent={() => console.log('Пык')}
                />
            </TabsWrapper>
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
            <Pagination
                lastPage={14}
                currentPage={2}
                className={classNames(cls.pagination)}
            />
        </div>
    );
};
