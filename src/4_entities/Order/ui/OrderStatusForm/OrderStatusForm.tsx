import classNames from 'classnames';
import cls from './OrderStatusForm.module.scss';

interface OrderStatusFormProps {
    className?: string
}

export const OrderStatusForm = (props: OrderStatusFormProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Форма изменения статуса
        </div>
    );
};
