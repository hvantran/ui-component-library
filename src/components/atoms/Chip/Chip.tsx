import React from 'react';
import { cn } from '../../../utils/cn';

export type ChipVariant = 'filled' | 'outlined';
export type ChipSize = 'sm' | 'md';
export type ChipColor = 'default' | 'primary' | 'secondary' | 'warning' | 'error' | 'success';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Label content */
  label?: React.ReactNode;
  /** Visual style variant */
  variant?: ChipVariant;
  /** Size dimension */
  size?: ChipSize;
  /** Color theme */
  color?: ChipColor;
  /** Leading icon element */
  icon?: React.ReactNode;
  /** Callback fired when delete icon is clicked */
  onDelete?: () => void;
  /** Custom delete icon */
  deleteIcon?: React.ReactNode;
  /** Click handler for clickable chips */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
}

const filledColorClasses: Record<ChipColor, string> = {
  default:
    'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-transparent',
  primary:
    'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200 border border-transparent',
  secondary:
    'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-200 border border-transparent',
  warning:
    'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border border-transparent',
  error:
    'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-200 border border-transparent',
  success:
    'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 border border-transparent',
};

const outlinedColorClasses: Record<ChipColor, string> = {
  default:
    'bg-transparent text-gray-700 border-gray-300 dark:text-gray-300 dark:border-gray-600',
  primary:
    'bg-transparent text-blue-700 border-blue-400 dark:text-blue-300 dark:border-blue-600',
  secondary:
    'bg-transparent text-purple-700 border-purple-400 dark:text-purple-300 dark:border-purple-600',
  warning:
    'bg-transparent text-amber-700 border-amber-400 dark:text-amber-300 dark:border-amber-600',
  error:
    'bg-transparent text-red-700 border-red-400 dark:text-red-300 dark:border-red-600',
  success:
    'bg-transparent text-emerald-700 border-emerald-400 dark:text-emerald-300 dark:border-emerald-600',
};

const sizeClasses: Record<ChipSize, string> = {
  sm: 'h-6 text-xs px-2.5 gap-1.5',
  md: 'h-8 text-sm px-3 gap-2',
};

/**
 * Atom — Chip
 *
 * Compact interactive element for tags, filters, status indicators, and removable tokens.
 * Compliant with Atomic Design and Tailwind-first policy with full keyboard accessibility.
 */
export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  (
    {
      label,
      children,
      variant = 'filled',
      size = 'sm',
      color = 'default',
      icon,
      onDelete,
      deleteIcon,
      onClick,
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    const isInteractive = Boolean(onClick && !disabled);
    const content = label !== undefined ? label : children;
    const colorStyles =
      variant === 'outlined' ? outlinedColorClasses[color] : filledColorClasses[color];

    const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (isInteractive && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onClick?.();
      }
    };

    return (
      <span
        ref={ref}
        role={isInteractive ? 'button' : undefined}
        tabIndex={isInteractive ? 0 : undefined}
        onKeyDown={handleKeyDown}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-full transition-colors select-none',
          sizeClasses[size],
          colorStyles,
          variant === 'outlined' && 'border',
          isInteractive &&
            'cursor-pointer hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className,
        )}
        {...props}
      >
        {icon && (
          <span className="inline-flex shrink-0 items-center justify-center" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="truncate">{content}</span>
        {onDelete && (
          <button
            type="button"
            aria-label="Remove chip"
            disabled={disabled}
            onClick={(e) => {
              e.stopPropagation();
              if (!disabled) {
                onDelete();
              }
            }}
            className="inline-flex shrink-0 items-center justify-center rounded-full p-0.5 ml-0.5 hover:bg-black/10 dark:hover:bg-white/20 transition-colors focus:outline-none"
          >
            {deleteIcon ?? (
              <span className="text-sm font-semibold leading-none" aria-hidden="true">
                ×
              </span>
            )}
          </button>
        )}
      </span>
    );
  },
);

Chip.displayName = 'Chip';
export default Chip;
