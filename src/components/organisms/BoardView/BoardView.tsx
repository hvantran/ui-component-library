import { Plus } from 'lucide-react';
import React from 'react';
import { cn } from '../../../utils/cn';
import { BoardColumn, BoardColumnProps } from '../BoardColumn';

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

export function BoardView<T = any>({
  columns,
  renderCard,
  onAddItem,
  headerActions,
  className,
}: BoardViewProps<T>) {
  return (
    <div className={cn('flex flex-col w-full h-full font-sans', className)}>
      {headerActions && (
        <div className="flex items-center justify-end pb-4 shrink-0">
          {headerActions}
        </div>
      )}

      {/* Horizontal Scroll Area */}
      <div className="flex items-start gap-4 overflow-x-auto pb-4 pt-1 w-full min-h-[500px]">
        {columns.map((column) => (
          <BoardColumn
            key={column.id}
            id={column.id}
            title={column.title}
            color={column.color}
            count={column.count !== undefined ? column.count : column.items.length}
            emptyMessage={column.emptyMessage}
            action={
              onAddItem ? (
                <button
                  type="button"
                  aria-label={`Add item to ${column.title}`}
                  onClick={() => onAddItem(column.id)}
                  className="p-1 text-secondary-500 hover:text-secondary-800 dark:hover:text-white rounded hover:bg-secondary-200/50 dark:hover:bg-secondary-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              ) : undefined
            }
          >
            {column.items.map((item, idx) => (
              <React.Fragment key={(item as any)?.id || idx}>
                {renderCard(item, column.id)}
              </React.Fragment>
            ))}
          </BoardColumn>
        ))}
      </div>
    </div>
  );
}

BoardView.displayName = 'BoardView';
export default BoardView;
