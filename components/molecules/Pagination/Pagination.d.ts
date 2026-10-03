import { default as React } from '../../../../node_modules/react';
export interface PaginationProps {
    pageIndex: number;
    pageSize: number;
    totalElements: number;
    rowsPerPageOptions?: number[];
    onPageChange: (newPageIndex: number) => void;
    onPageSizeChange?: (newPageSize: number) => void;
    className?: string;
}
export declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
