import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LinkHTMLAttributes, memo } from 'react';
import cls from './LinkRegular.module.scss';

interface LinkRegularProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    to: string;
    text: string;
}

export const LinkRegular = memo((props: LinkRegularProps) => {
    const {
        to,
        text,
        className,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            {...otherProps}
            className={classNames(
                cls.block,
                className,
            )}
        >
            { text }
        </Link>
    );
});
