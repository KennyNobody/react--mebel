import classNames from 'classnames';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './Overlay.module.scss';

interface OverlayProps {
    isVisible: boolean;
    className?: string;
    themeProp?: AppTheme;
}

export const Overlay = (props: OverlayProps) => {
    const {
        isVisible,
        themeProp,
        className,
    } = props;

    const { theme } = useTheme();

    return (
        <div
            hidden={!isVisible}
            className={
                classNames(
                    cls.block,
                    cls[`block--${themeProp || theme}`],
                    className,
                )
            }
        />
    );
};
