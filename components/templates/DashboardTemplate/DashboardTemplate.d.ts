import { default as React } from '../../../../node_modules/react';
export interface DashboardTemplateProps {
    topBar: React.ReactNode;
    sidebar: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}
export declare const DashboardTemplate: React.FC<DashboardTemplateProps>;
export default DashboardTemplate;
