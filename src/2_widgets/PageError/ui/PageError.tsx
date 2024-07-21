import classNames from 'classnames';
import { Error } from '5_shared/ui/Error/Error';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = (props: PageErrorProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageError, className)}>
            <Error />
        </div>
    );
};
