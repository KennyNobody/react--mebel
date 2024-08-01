import classNames from 'classnames';
import cls from './OrderSelectContractor.module.scss';

interface OrderSelectContractorProps {
    className?: string
}

export const OrderSelectContractor = (props: OrderSelectContractorProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Форма выбора исполнителя
        </div>
    );
};
