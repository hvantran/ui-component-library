import React from 'react';
import { cn } from '../../../utils/cn';

export type StatusChipVariant =
  | 'proctoring'
  | 'pending'
  | 'draft'
  | 'published'
  | 'active'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error';

export type StatusChipSize = 'sm' | 'md' | 'small' | 'medium';

export interface StatusChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Text label or content displayed in chip */
  label: React.ReactNode;
  /** Visual status variant */
  variant?: StatusChipVariant;
  /** Leading icon */
  icon?: React.ReactNode;
  /** Optional delete/close callback */
  onDelete?: () => void;
  /** Size dimension */
  size?: StatusChipSize;
}

const variantClassMap: Record<StatusChipVariant, string> = {
  proctoring:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  pending:
    'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-200 dark:border-amber-800',
  draft:
    'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700',
  published:
    'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800',
  active:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  neutral:
    'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 border border-gray-200 dark:border-gray-700',
  success:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  warning:
    'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-amber-200 dark:border-amber-800',
  error:
    'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border border-red-200 dark:border-red-800',
};

const sizeClassMap: Record<StatusChipSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  small: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
  medium: 'text-sm px-2.5 py-1',
};

/**
 * Atom — StatusChip
 *
 * Pill-shaped status indicator used for workflow states, proctoring states,
 * and review counters with dark-mode and keyboard accessibility support.
 */
export const StatusChip = React.forwardRef<HTMLSpanElement, StatusChipProps>(
  (
    {
      label,
      variant = 'neutral',
      icon,
      onDelete,
      size = 'small',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full font-semibold select-none transition-colors',
          sizeClassMap[size],
          variantClassMap[variant],
          className,
        )}
        {...props}
      >
        {icon && (
          <span className="mr-1 inline-flex shrink-0 items-center justify-center" aria-hidden="true">
            {icon}
          </span>
        )}
        <span>{label}</span>
        {onDelete && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            aria-label="Remove status chip"
            className="ml-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none"
          >
            ×
          </button>
        )}
      </span>
    );
  },
);

StatusChip.displayName = 'StatusChip';
export default StatusChip;
