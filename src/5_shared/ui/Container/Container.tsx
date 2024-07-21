import { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './Container.module.scss';

interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export function Container(props: ContainerProps) {
    const { className, children } = props;

    return (
        <div className={classNames(cls.block, className)}>
            { children }
        </div>
    );
}
