import { default as React } from '../../../../node_modules/react';
export interface AppTopBarProps {
    title?: React.ReactNode;
    logo?: React.ReactNode;
    breadcrumbs?: React.ReactNode;
    searchSlot?: React.ReactNode;
    actionsSlot?: React.ReactNode;
    userSlot?: React.ReactNode;
    onMenuToggle?: () => void;
    isDarkMode?: boolean;
    onThemeToggle?: () => void;
    className?: string;
}
export declare const AppTopBar: React.FC<AppTopBarProps>;
export default AppTopBar;
