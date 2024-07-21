import { createContext } from 'react';

export enum AppTheme {
    LIGHT = 'theme-light',
    DARK = 'theme-dark',
}

export interface ThemeContextProps {
    theme?: AppTheme;
    setTheme?: (theme: AppTheme) => void;
    setThemeManual?: (theme: AppTheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'app-theme';
