import classNames from 'classnames';
import Icon from '5_shared/assets/icons/check-thin.svg';
import cls from './Status.module.scss';
import { OrderStatus } from '../../model/types/Order';

interface StatusProps {
    className?: string;
    status: OrderStatus;
}

type OrderStatusDescriptions = {
    [key in OrderStatus]: string;
};

const statusClass: OrderStatusDescriptions = {
    'нет исполнителя': 'waiting',
    'в работе': 'process',
    'ждет проверки': 'control',
    'выполнено': 'completed',
};

export const Status = (props: StatusProps) => {
    const {
        status,
        className,
    } = props;

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${statusClass[status]}`],
                    className,
                )
            }
        >
            {
                status === 'выполнено'
                && (
                    <Icon
                        className={classNames(cls.icon)}
                    />
                )
            }
            <span className={classNames(cls.text)}>
                { status }
            </span>
        </div>
    );
};
