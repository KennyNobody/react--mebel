import classNames from 'classnames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.block, className)}>
            Страница не найдена
        </div>
    );
};
