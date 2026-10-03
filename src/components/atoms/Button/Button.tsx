import React from 'react';
import { cn } from '../../../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outlined';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPlacement = 'left' | 'right';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant */
  variant?: ButtonVariant;
  /** Size dimension */
  size?: ButtonSize;
  /** Disabled state */
  disabled?: boolean;
  /** Show loading spinner and disable button */
  loading?: boolean;
  /** Expand button to fill container width */
  fullWidth?: boolean;
  /** Leading or trailing icon element */
  icon?: React.ReactNode;
  /** Position of the icon relative to children text */
  iconPlacement?: ButtonIconPlacement;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700',
  secondary:
    'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100',
  danger: 'bg-red-600 hover:bg-red-700 text-white dark:bg-red-600 dark:hover:bg-red-700',
  ghost:
    'bg-transparent hover:bg-gray-100 text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200',
  outlined:
    'border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
};

/**
 * Atom — Button
 *
 * Universal interactive button adhering to Atomic Design principles and Tailwind-first policy.
 * Provides accessible keyboard focus, touch targets, loading spinner, and dark mode support.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      fullWidth = false,
      icon,
      iconPlacement = 'left',
      type = 'button',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none',
          className,
        )}
        {...props}
      >
        {loading ? (
          <span
            data-testid="loading-spinner"
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            aria-hidden="true"
          />
        ) : (
          iconPlacement === 'left' &&
          icon && (
            <span
              className="inline-flex shrink-0 items-center justify-center"
              aria-hidden="true"
            >
              {icon}
            </span>
          )
        )}
        {children !== null && children !== undefined && (
          <span className="inline-flex items-center gap-2">{children}</span>
        )}
        {!loading &&
          iconPlacement === 'right' &&
          icon && (
            <span
              className="inline-flex shrink-0 items-center justify-center"
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
