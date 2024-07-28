import classNames from 'classnames';
import cls from './EditMore.module.scss';

interface EditMoreProps {
    className?: string;
}

export const EditMore = (props: EditMoreProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Дополнительная информация
        </div>
    );
};
