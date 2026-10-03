import { default as React } from '../../../../node_modules/react';
export interface AppFooterProps {
    appName?: string;
    version?: string;
    statusText?: string;
    isOnline?: boolean;
    links?: Array<{
        label: string;
        href: string;
    }>;
    className?: string;
}
export declare const AppFooter: React.FC<AppFooterProps>;
export default AppFooter;
