import { default as React } from '../../../../node_modules/react';
import { TableMetadata } from '../../../types/metadata';
export interface DataTableProps<T = any> extends TableMetadata<T> {
    className?: string;
    emptyStateTitle?: string;
    emptyStateDescription?: string;
}
export declare function DataTable<T extends Record<string, any> = any>({ name, columns, pagingOptions, pagingResult, keyColumn, visibleSearchbar, searchPlaceholder, loading, onRowClickCallback, headerActions, className, emptyStateTitle, emptyStateDescription, }: DataTableProps<T>): React.JSX.Element;
export declare namespace DataTable {
    var displayName: string;
}
export default DataTable;
