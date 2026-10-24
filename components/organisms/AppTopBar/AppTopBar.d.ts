import { default as React } from '../../../../node_modules/react';
import { ThemeMode } from '../../../theme/ThemeProvider';
export interface AppTopBarProps {
    title?: React.ReactNode;
    logo?: React.ReactNode;
    breadcrumbs?: React.ReactNode;
    searchSlot?: React.ReactNode;
    actionsSlot?: React.ReactNode;
    userSlot?: React.ReactNode;
    themeSlot?: React.ReactNode;
    onMenuToggle?: () => void;
    isDarkMode?: boolean;
    onThemeToggle?: () => void;
    themeMode?: ThemeMode;
    onThemeModeChange?: (mode: ThemeMode) => void;
    className?: string;
}
export declare const AppTopBar: React.FC<AppTopBarProps>;
export default AppTopBar;
