import React from 'react';
import { cn } from '../../../utils/cn';
import { Badge } from '../../atoms/Badge';

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

const colorIndicators = {
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-400',
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  danger: 'bg-red-500',
};

export const BoardColumn: React.FC<BoardColumnProps> = ({
  id,
  title,
  count,
  color = 'secondary',
  action,
  children,
  emptyMessage = 'No items in this column',
  className,
}) => {
  const childrenCount = React.Children.count(children);
  const displayCount = count !== undefined ? count : childrenCount;

  return (
    <section
      data-column-id={id}
      aria-label={`${title} column`}
      className={cn(
        'flex flex-col w-80 shrink-0 bg-secondary-50/70 dark:bg-secondary-900/40 rounded-card border border-secondary-200/80 dark:border-secondary-800 font-sans max-h-full',
        className
      )}
    >
      {/* Column Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-secondary-200/80 dark:border-secondary-800">
        <div className="flex items-center gap-2">
          <span
            className={cn('w-2.5 h-2.5 rounded-full shrink-0', colorIndicators[color])}
            aria-hidden="true"
          />
          <h3 className="text-sm font-semibold text-secondary-900 dark:text-white truncate">
            {title}
          </h3>
          <Badge variant="secondary" count={displayCount} className="text-[11px]" />
        </div>

        {action && <div className="flex items-center">{action}</div>}
      </header>

      {/* Cards Scroll Container */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3 min-h-[150px]">
        {childrenCount === 0 ? (
          <div className="flex items-center justify-center h-28 border-2 border-dashed border-secondary-200 dark:border-secondary-800 rounded-btn text-xs text-secondary-400 text-center px-4">
            {emptyMessage}
          </div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};

BoardColumn.displayName = 'BoardColumn';
export default BoardColumn;
