import { default as React } from '../../../../node_modules/react';
import { GenericActionMetadata } from '../../../types/metadata';
import { BreadcrumbItem } from '../../molecules/Breadcrumbs';
export interface PageHeaderProps {
    title: string;
    breadcrumbs?: BreadcrumbItem[];
    actions?: GenericActionMetadata[];
    className?: string;
}
export declare const PageHeader: React.FC<PageHeaderProps>;
export default PageHeader;
