import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './TabsWrapper.module.scss';

interface TabsWrapperProps {
    className?: string;
    children: ReactNode;
}

export const TabsWrapper = (props: TabsWrapperProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <nav className={classNames(cls.block, className)}>
            { children }
        </nav>
    );
};
