import React from 'react';
import { cn } from '../../../utils/cn';

export type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'danger';
export type ProgressBarSize = 'sm' | 'md' | 'lg';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress percentage between 0 and 100 */
  value: number;
  /** Visual variant matching status */
  variant?: ProgressBarVariant;
  /** Size dimension */
  size?: ProgressBarSize;
  /** Show label above or inside */
  label?: string;
  /** Show numeric percentage text */
  showPercentage?: boolean;
}

const variantClasses: Record<ProgressBarVariant, string> = {
  primary: 'bg-blue-600 dark:bg-blue-500',
  success: 'bg-green-500 dark:bg-green-400',
  warning: 'bg-yellow-500 dark:bg-yellow-400',
  danger: 'bg-red-500 dark:bg-red-400',
};

const heightClasses: Record<ProgressBarSize, string> = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-4',
};

/**
 * Atom — ProgressBar
 *
 * Universal progress indicator for jobs, sync status, and multi-step workflows.
 */
export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      variant = 'primary',
      size = 'md',
      label,
      showPercentage = false,
      className,
      ...props
    },
    ref,
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
      <div ref={ref} className={cn('w-full flex flex-col gap-1.5', className)} {...props}>
        {(label || showPercentage) && (
          <div className="flex items-center justify-between text-xs font-medium text-gray-700 dark:text-gray-300">
            {label && <span>{label}</span>}
            {showPercentage && <span>{Math.round(clampedValue)}%</span>}
          </div>
        )}

        <div
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          className={cn(
            'w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700',
            heightClasses[size],
          )}
        >
          <div
            className={cn(
              'h-full rounded-full transition-all duration-300 ease-out',
              variantClasses[variant],
            )}
            style={{ width: `${clampedValue}%` }}
          />
        </div>
      </div>
    );
  },
);

ProgressBar.displayName = 'ProgressBar';
export default ProgressBar;
