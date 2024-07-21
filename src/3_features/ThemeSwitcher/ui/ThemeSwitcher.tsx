import classNames from 'classnames';
import { useTheme } from '5_shared/libs/hooks/useTheme';
import { AppTheme } from '5_shared/config/ThemeContext';
import { Switcher } from '5_shared/ui/Switcher/Switcher';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
    const { className } = props;
    const { theme, setThemeManual } = useTheme();
    const changeTheme = (e) => {
        const isChecked = e.target.checked;
        setThemeManual(isChecked ? AppTheme.DARK : AppTheme.LIGHT);
    };

    return (
        <Switcher
            changeEvent={changeTheme}
            isChecked={theme === AppTheme.DARK}
            className={classNames(cls.toggler, className)}
        />
    );
}
