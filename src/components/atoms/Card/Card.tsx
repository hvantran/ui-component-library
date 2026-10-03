import React from 'react';
import { cn } from '../../../utils/cn';

export type CardVariant = 'default' | 'outlined' | 'elevated';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual variant */
  variant?: CardVariant;
  /** Internal padding */
  padding?: CardPadding;
  /** Enable hover elevation and cursor pointer */
  interactive?: boolean;
  /** Highlight border for selectable cards */
  selected?: boolean;
}

const variantClasses: Record<CardVariant, string> = {
  default:
    'border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800',
  outlined:
    'border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
  elevated:
    'border border-transparent bg-white shadow-md hover:shadow-lg dark:bg-gray-800 dark:border-transparent',
};

const paddingClasses: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-4',
  lg: 'p-6',
};

/**
 * Atom — Card
 *
 * Universal surface container supporting atomic design and Tailwind styling.
 * Mobile-first responsive (full width by default) with configurable elevation and padding.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      padding = 'md',
      interactive = false,
      selected = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full rounded-card transition duration-150 ease-in-out text-gray-900 dark:text-gray-100',
          variantClasses[variant],
          paddingClasses[padding],
          interactive &&
            'cursor-pointer hover:shadow-lg hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500',
          selected &&
            'border-blue-500 ring-2 ring-blue-500 bg-blue-50/40 dark:bg-blue-900/20',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
export default Card;
