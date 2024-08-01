import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { OrderType } from '4_entities/Order';
import { DateUI } from '5_shared/ui/Date/DateUI';
import { Status } from '../Status/Status';
import cls from './ArticleOrder.module.scss';

interface ArticleOrderProps {
    className?: string;
    data: OrderType;
    mode: 'static' | 'link';
}

export const ArticleOrder = (props: ArticleOrderProps) => {
    const {
        data,
        mode,
        className,
    } = props;

    const content = (
        <>
            <div className={classNames(cls['block__column-title'])}>
                <h3 className={classNames(cls.title)}>
                    { data.title }
                </h3>
            </div>
            <div className={classNames(cls['block__column-date'])}>
                <DateUI
                    data={data.createDate}
                    className={classNames(cls.time)}
                />
            </div>
            <div className={classNames(cls['block__column-price'])}>
                <span className={classNames(cls.price)}>
                    {
                        `${data.price} ₽`
                    }
                </span>
            </div>
            <div className={classNames(cls['block__column-status'])}>
                <Status
                    status={data.status}
                    className={classNames(cls.status)}
                />
            </div>
            {
                data.messageCounter > 0
                && (
                    <span className={classNames(cls.counter)}>
                        {`+${data.messageCounter}`}
                    </span>
                )
            }
        </>
    );

    if (mode === 'link') {
        return (
            <Link
                to={`/orders-list/${data.id}`}
                className={classNames(cls.block, className)}
            >
                { content }
            </Link>
        );
    }

    return (
        <div className={classNames(cls.block, className)}>
            { content }
        </div>
    );
};
