import { default as React } from '../../../../../node_modules/react';
import { GenericActionMetadata, SpeedDialActionMetadata } from '../../../../types/metadata';
import { BreadcrumbItem } from '../../../molecules/Breadcrumbs';
import { DataTableProps } from '../../../organisms/DataTable';
import { BoardViewProps } from '../../../organisms/BoardView';
export interface ActionSummaryTemplateProps<T = any> {
    pageTitle?: string;
    breadcrumbs?: BreadcrumbItem[];
    headerActions?: GenericActionMetadata[];
    tableProps: DataTableProps<T>;
    boardProps?: BoardViewProps;
    defaultViewMode?: 'board' | 'list';
    onViewModeChange?: (mode: 'board' | 'list') => void;
    floatingActions?: SpeedDialActionMetadata[];
    className?: string;
}
export declare const ActionSummaryTemplate: {
    <T extends Record<string, any> = any>({ pageTitle, breadcrumbs, headerActions, tableProps, boardProps, defaultViewMode, onViewModeChange, floatingActions, className, }: ActionSummaryTemplateProps<T>): React.JSX.Element;
    displayName: string;
};
export default ActionSummaryTemplate;
