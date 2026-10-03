import React from 'react';
import { cn } from '../../../utils/cn';

export type BadgeStatus = 'ACTIVE' | 'PAUSED' | 'FAILED' | 'DELETED';
export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'neutral'
  | BadgeStatus;

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual variant or action status */
  variant?: BadgeVariant;
  /** Optional status enum shorthand */
  status?: BadgeStatus;
  /** Numeric count to display with optional max cutoff */
  count?: number | string;
  /** Cutoff for counts, renders `${max}+` */
  max?: number;
  /** Optional dot indicator before label */
  dot?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  // Status aliases matching BDD scenarios
  ACTIVE: 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300',
  PAUSED: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300',
  FAILED: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
  DELETED: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',

  // Semantic variants
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
  secondary: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  success: 'bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300',
  danger: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
  neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
};

const dotColorClasses: Record<BadgeVariant, string> = {
  ACTIVE: 'bg-green-500',
  PAUSED: 'bg-yellow-500',
  FAILED: 'bg-red-500',
  DELETED: 'bg-gray-400',
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
  neutral: 'bg-gray-500',
};

/**
 * Atom — Badge
 *
 * Status indicator and numeric badge counter adhering to BDD specifications.
 * Supports status codes (ACTIVE, PAUSED, FAILED, DELETED) and numeric counter caps.
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant,
      status,
      count,
      max,
      dot = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedVariant: BadgeVariant = status || variant || 'neutral';

    let displayContent: React.ReactNode = children;
    if (count !== undefined) {
      if (max !== undefined && typeof count === 'number' && count > max) {
        displayContent = `${max}+`;
      } else {
        displayContent = count;
      }
    } else if (children === undefined && status) {
      displayContent = status;
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold leading-none whitespace-nowrap',
          variantClasses[resolvedVariant],
          className,
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn('h-1.5 w-1.5 rounded-full', dotColorClasses[resolvedVariant])}
            aria-hidden="true"
          />
        )}
        {displayContent}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
export default Badge;
