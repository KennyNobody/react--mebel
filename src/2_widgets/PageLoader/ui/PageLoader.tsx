import classNames from 'classnames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Loader, className)}>
            Лоадер
        </div>
    );
};
