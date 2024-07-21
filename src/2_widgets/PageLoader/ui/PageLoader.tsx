import classNames from 'classnames';
import { Loader } from '5_shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Loader, className)}>
            <Loader />
        </div>
    );
};
