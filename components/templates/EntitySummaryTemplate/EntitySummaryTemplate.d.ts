import { GenericActionMetadata, SpeedDialActionMetadata, TabMetadata } from '../../../types/metadata';
import { BreadcrumbItem } from '../../molecules/Breadcrumbs';
import { DataTableProps } from '../../organisms/DataTable';
export interface EntitySummaryTemplateProps<T = any> {
    pageTitle: string;
    breadcrumbs?: BreadcrumbItem[];
    headerActions?: GenericActionMetadata[];
    tabs?: TabMetadata[];
    activeTab?: string;
    onTabChange?: (tabId: string) => void;
    tableProps: DataTableProps<T>;
    floatingActions?: SpeedDialActionMetadata[];
    className?: string;
}
export declare function EntitySummaryTemplate<T extends Record<string, any> = any>({ pageTitle, breadcrumbs, headerActions, tabs, activeTab, onTabChange, tableProps, floatingActions, className, }: EntitySummaryTemplateProps<T>): import("react").JSX.Element;
export declare namespace EntitySummaryTemplate {
    var displayName: string;
}
export default EntitySummaryTemplate;
