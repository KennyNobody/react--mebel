import classNames from 'classnames';
import cls from './OrderChat.module.scss';

interface OrderChatProps {
    className?: string
}

export const OrderChat = (props: OrderChatProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Чат заказа
        </div>
    );
};
