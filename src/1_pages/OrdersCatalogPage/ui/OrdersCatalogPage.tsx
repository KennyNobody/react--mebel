import classNames from 'classnames';
import cls from './OrdersCatalogPage.module.scss';

interface OrdersCatalogPageProps {
    className?: string
}

export const OrdersCatalogPage = (props: OrdersCatalogPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.OrdersCatalogPage, className)}>
            Страница каталога заказов
        </div>
    );
};
