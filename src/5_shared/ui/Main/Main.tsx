import { ReactNode } from 'react';
import classNames from 'classnames';
import useLayoutMode from '5_shared/libs/hooks/useLayoutMode';
import cls from './Main.module.scss';

interface MainProps {
    className?: string;
    children: ReactNode;
}

export const Main = (props: MainProps) => {
    const {
        children,
        className,
    } = props;

    const layoutMode = useLayoutMode();

    return (
        <main
            className={
                classNames(
                    cls.block,
                    cls[`block--${layoutMode}`],
                    className,
                )
            }
        >
            { children }
        </main>
    );
};
