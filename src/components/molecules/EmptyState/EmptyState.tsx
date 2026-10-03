import { Inbox } from 'lucide-react';
import React from 'react';
import { cn } from '../../../utils/cn';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No data found',
  description = 'There are no items to display at this time.',
  icon,
  action,
  className,
}) => {
  return (
    <div
      role="region"
      aria-label="Empty State"
      className={cn(
        'flex flex-col items-center justify-center p-8 text-center rounded-card border border-dashed border-secondary-300 dark:border-secondary-700 bg-surface-card-light/50 dark:bg-surface-card-dark/50',
        className
      )}
    >
      <div className="p-3 mb-3 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-500 dark:text-secondary-400">
        {icon || <Inbox className="w-8 h-8" aria-hidden="true" />}
      </div>
      <h3 className="text-base font-semibold text-secondary-900 dark:text-white mb-1">
        {title}
      </h3>
      {description && (
        <p className="max-w-sm text-sm text-secondary-500 dark:text-secondary-400 mb-4">
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  );
};

EmptyState.displayName = 'EmptyState';
export default EmptyState;
