import classNames from 'classnames';
import cls from './Informer.module.scss';

interface InformerProps {
    className?: string
}

export const Informer = (props: InformerProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Блок-информер
        </div>
    );
};
