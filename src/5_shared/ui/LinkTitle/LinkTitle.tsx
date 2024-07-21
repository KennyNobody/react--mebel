import classNames from 'classnames';
import { LinkHTMLAttributes, memo, ReactNode } from 'react';
import cls from './LinkTitle.module.scss';

interface LinkTitleProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    children: ReactNode;
}

export const LinkTitle = memo((props: LinkTitleProps) => {
    const {
        children,
        className,
        ...otherProps
    } = props;

    return (
        <a
            {...otherProps}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(
                cls.block,
                className,
            )}
        >
            { children }
        </a>
    );
});
