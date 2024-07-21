import classNames from 'classnames';
import { ChangeEvent, memo } from 'react';
import { AppTheme } from '5_shared/config/ThemeContext';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import cls from './Toggler.module.scss';

interface TogglerProps {
    className?: string;
    isChecked: boolean;
    themeProp?: AppTheme;
    arr?: [string, string];
    changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Toggler = memo((props: TogglerProps) => {
    const {
        arr,
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
                <span className={classNames(cls.content)}>
                    {
                        arr && arr[0] && (
                            <span className={classNames(
                                cls.cell,
                                cls[`cell--${themeProp || theme}`],
                            )}
                            >
                                { arr[0] }
                            </span>
                        )
                    }
                    {
                        arr && arr[1] && (
                            <span className={classNames(
                                cls.cell,
                                cls[`cell--${themeProp || theme}`],
                            )}
                            >
                                { arr[1] }
                            </span>
                        )
                    }
                </span>
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
