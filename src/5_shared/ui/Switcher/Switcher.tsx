import classNames from 'classnames';
import { ChangeEvent, memo } from 'react';
import cls from './Switcher.module.scss';
import {AppTheme} from "5_shared/config/ThemeContext";
import {useTheme} from "5_shared/libs/hooks/useTheme";

interface SwitcherProps {
    className?: string;
    isChecked: boolean;
    themeProp?: AppTheme;
    changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Switcher = memo((props: SwitcherProps) => {
    const {
        className,
        isChecked,
        themeProp,
        changeEvent,
    } = props;

    const { theme } = useTheme();

    return (
        <label className={classNames(cls.label, className)}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={changeEvent}
                className={classNames(cls.input)}
            />
            <span
                className={
                    classNames(
                        cls.wrapper,
                        cls[`wrapper--${themeProp || theme}`],
                    )
                }
            >
                <span
                    className={
                        classNames(
                            cls.button,
                            { [cls['button--fixed']]: true },
                        )
                    }
                />
            </span>
        </label>
    );
});
