import classNames from 'classnames';
import Icon from '5_shared/assets/icons/menu.svg';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './MenuMobileButton.module.scss';

interface MenuMobileButtonProps {
    className?: string;
    clickEvent: () => void;
}

export const MenuMobileButton = (props: MenuMobileButtonProps) => {
    const {
        className,
        clickEvent,
    } = props;

    const { theme } = useTheme();

    return (
        <button
            type="button"
            onClick={clickEvent}
            className={classNames(cls.block, className)}
        >
            <Icon
                className={
                    classNames(
                        cls.icon,
                        cls[`icon--${theme}`],
                    )
                }
            />
        </button>
    );
};
