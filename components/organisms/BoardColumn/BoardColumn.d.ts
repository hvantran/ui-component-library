import { default as React } from '../../../../node_modules/react';
export interface BoardColumnProps {
    id: string;
    title: string;
    count?: number;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    action?: React.ReactNode;
    children: React.ReactNode;
    emptyMessage?: string;
    className?: string;
}
export declare const BoardColumn: React.FC<BoardColumnProps>;
export default BoardColumn;
