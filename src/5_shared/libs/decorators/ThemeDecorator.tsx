import { ReactNode } from 'react';
import { AppTheme } from '5_shared/config/ThemeContext';

interface ThemeDecoratorProps {
    theme: AppTheme,
    children: ReactNode,
}

export const ThemeDecorator = ({ theme, children }: ThemeDecoratorProps) => (
    <div className={`app ${theme}`}>
        { children }
    </div>
);
