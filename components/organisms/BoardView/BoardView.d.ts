import { default as React } from '../../../../node_modules/react';
import { BoardColumnProps } from '../BoardColumn';
export interface BoardColumnData<T = any> {
    id: string;
    title: string;
    color?: BoardColumnProps['color'];
    items: T[];
    count?: number;
    emptyMessage?: string;
}
export interface BoardViewProps<T = any> {
    columns: BoardColumnData<T>[];
    renderCard: (item: T, columnId: string) => React.ReactNode;
    onAddItem?: (columnId: string) => void;
    headerActions?: React.ReactNode;
    className?: string;
}
export declare function BoardView<T = any>({ columns, renderCard, onAddItem, headerActions, className, }: BoardViewProps<T>): React.JSX.Element;
export declare namespace BoardView {
    var displayName: string;
}
export default BoardView;
