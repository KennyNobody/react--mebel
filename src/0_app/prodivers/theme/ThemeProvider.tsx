import {
    ReactNode,
    useMemo,
    useState,
} from 'react';
import {
    AppTheme,
    ThemeContext,
    LOCAL_STORAGE_THEME_KEY,
} from '5_shared/config/ThemeContext';

interface ThemeProviderProps {
    children: ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme || AppTheme.LIGHT;

function ThemeProvider(props: ThemeProviderProps) {
    const { children } = props;
    const [theme, setTheme] = useState<AppTheme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            { children }
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
