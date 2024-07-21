import classNames from 'classnames';
import { ReactNode } from 'react';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import cls from './Head.module.scss';

interface HeadProps {
    isMain: boolean;
    className?: string;
    children: ReactNode;
    themeProp?: AppTheme;
}

export const Head = (props: HeadProps) => {
    const {
        isMain,
        children,
        className,
        themeProp,
    } = props;
    const { theme } = useTheme();

    return (
        <div
            className={
                classNames(
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                    { [cls['block--regular']]: !isMain },
                    className,
                )
            }
        >
            { children }
        </div>
    );
};
