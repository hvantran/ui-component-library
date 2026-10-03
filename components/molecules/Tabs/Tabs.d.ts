import { default as React } from '../../../../node_modules/react';
export interface TabItem {
    id: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    disabled?: boolean;
}
export interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    onChange: (tabId: string) => void;
    className?: string;
}
export declare const Tabs: React.FC<TabsProps>;
export default Tabs;
