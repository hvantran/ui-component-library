import { default as React } from '../../../../node_modules/react';
export interface AppSwitcherItem {
    id: string;
    name: string;
    url: string;
    iconSrc?: string;
    icon?: React.ReactNode;
    isCurrentApp?: boolean;
}
export interface AppSwitcherProps {
    items?: AppSwitcherItem[];
    currentAppId?: string;
    title?: string;
    onNavigate?: (item: AppSwitcherItem) => void;
    className?: string;
    triggerClassName?: string;
    popoverClassName?: string;
}
export declare const DEFAULT_PLATFORM_APPS: AppSwitcherItem[];
export declare const AppSwitcher: React.FC<AppSwitcherProps>;
export default AppSwitcher;
