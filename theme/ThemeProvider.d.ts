import { default as React } from '../../node_modules/react';
export type ThemeMode = 'light' | 'dark' | 'system';
export declare const COMPANION_ELEMENT_COLORS: Record<string, string>;
export interface ThemeContextValue {
    theme: ThemeMode;
    resolvedTheme: 'light' | 'dark';
    setTheme: (theme: ThemeMode) => void;
    toggleTheme: () => void;
    companionElement?: string;
    setCompanionElement: (element?: string) => void;
    companionBackgroundImageUrl?: string;
    setCompanionBackgroundImageUrl: (url?: string) => void;
}
export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: ThemeMode;
    storageKey?: string;
    companionElement?: string;
    companionBackgroundImageUrl?: string;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare function useTheme(): ThemeContextValue;
export default ThemeProvider;
