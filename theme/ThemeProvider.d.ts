import { default as React } from '../../node_modules/react';
export type ThemeMode = 'light' | 'dark' | 'system';
export interface ThemeContextValue {
    theme: ThemeMode;
    resolvedTheme: 'light' | 'dark';
    setTheme: (theme: ThemeMode) => void;
    toggleTheme: () => void;
}
export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: ThemeMode;
    storageKey?: string;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare function useTheme(): ThemeContextValue;
export default ThemeProvider;
