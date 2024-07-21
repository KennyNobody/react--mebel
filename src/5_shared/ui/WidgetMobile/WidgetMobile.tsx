import { ReactNode } from 'react';
import classNames from 'classnames';
import { Toolbar } from '5_shared/ui/Toolbar/Toolbar';
import cls from './WidgetMobile.module.scss';
import {useTheme} from "5_shared/libs/hooks/useTheme";

interface WidgetMobileProps {
    title: string;
    className?: string;
    children: ReactNode;
}

export const WidgetMobile = (props: WidgetMobileProps) => {
    const {
        title,
        children,
        className,
    } = props;

    const { theme } = useTheme();

    return (
        <label
            className={
                classNames(
                    cls.block,
                    cls[`block--${theme}`],
                    className,
                )
            }
        >
            <span className={classNames(cls.title)}>{ title }</span>
            { children }
        </label>
    );
};
