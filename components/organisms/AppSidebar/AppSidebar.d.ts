import { default as React } from '../../../../node_modules/react';
export interface NavItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}
export interface NavGroup {
    heading?: string;
    items: NavItem[];
}
export interface AppSidebarProps {
    groups: NavGroup[];
    isCollapsed?: boolean;
    onToggleCollapse?: () => void;
    footerSlot?: React.ReactNode;
    className?: string;
}
export declare const AppSidebar: React.FC<AppSidebarProps>;
export default AppSidebar;
