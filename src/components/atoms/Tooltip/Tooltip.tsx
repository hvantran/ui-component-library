import React, { useId } from 'react';
import { cn } from '../../../utils/cn';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** Content to display in the tooltip popover */
  content?: React.ReactNode;
  /** Alias for content (MUI compatibility) */
  title?: React.ReactNode;
  /** Element that triggers the tooltip */
  children: React.ReactNode;
  /** Positioning relative to trigger element */
  position?: TooltipPosition;
  /** Whether the tooltip is disabled */
  disabled?: boolean;
  /** Additional tooltip popup class names */
  className?: string;
}

const positionClasses: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
  left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  right: 'left-full top-1/2 -translate-y-1/2 ml-2',
};

const arrowClasses: Record<TooltipPosition, string> = {
  top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900 dark:border-t-gray-100 border-x-transparent border-b-transparent border-4',
  bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 dark:border-b-gray-100 border-x-transparent border-t-transparent border-4',
  left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900 dark:border-l-gray-100 border-y-transparent border-r-transparent border-4',
  right: 'right-full top-1/2 -translate-y-1/2 border-r-gray-900 dark:border-r-gray-100 border-y-transparent border-l-transparent border-4',
};

/**
 * Atom — Tooltip
 *
 * Lightweight, accessible tooltip popup without external dependencies.
 * Activated on hover or focus with configurable positions and dark mode support.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  title,
  children,
  position = 'top',
  disabled = false,
  className,
}) => {
  const tooltipText = content ?? title;
  const tooltipId = useId();

  if (
    disabled ||
    tooltipText == null ||
    tooltipText === '' ||
    typeof tooltipText === 'boolean'
  ) {
    return <>{children}</>;
  }

  return (
    <span className="relative inline-flex group" aria-describedby={tooltipId}>
      {children}
      <span
        id={tooltipId}
        role="tooltip"
        className={cn(
          'absolute z-50 pointer-events-none whitespace-nowrap rounded px-2.5 py-1 text-xs font-medium',
          'bg-gray-900 text-white shadow-md dark:bg-gray-100 dark:text-gray-900',
          'opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-150',
          positionClasses[position],
          className,
        )}
      >
        {tooltipText}
        <span className={cn('absolute h-0 w-0', arrowClasses[position])} aria-hidden="true" />
      </span>
    </span>
  );
};

Tooltip.displayName = 'Tooltip';
export default Tooltip;
