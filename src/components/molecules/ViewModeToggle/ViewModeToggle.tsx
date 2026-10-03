import React from 'react';
import { cn } from '../../../utils/cn';

export interface ViewModeOption<T extends string = string> {
  value: T;
  label: string;
  icon?: React.ReactNode;
}

export interface ViewModeToggleProps<T extends string = string> {
  mode: T;
  modes: ViewModeOption<T>[];
  onChange: (mode: T) => void;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

const sizeClasses = {
  sm: 'px-2 py-1 text-xs gap-1',
  md: 'px-3 py-1.5 text-sm gap-1.5',
  lg: 'px-4 py-2 text-base gap-2',
};

export function ViewModeToggle<T extends string = string>({
  mode,
  modes,
  onChange,
  size = 'md',
  className,
  ariaLabel = 'View mode toggle',
}: ViewModeToggleProps<T>) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center p-1 rounded-card bg-secondary-100 dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700/60 font-sans',
        className
      )}
    >
      {modes.map((opt) => {
        const isActive = opt.value === mode;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(opt.value)}
            className={cn(
              'inline-flex items-center justify-center font-medium rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500/20 whitespace-nowrap',
              sizeClasses[size],
              isActive
                ? 'bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white shadow-sm font-semibold'
                : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-secondary-700/50'
            )}
          >
            {opt.icon && <span className="shrink-0">{opt.icon}</span>}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}

ViewModeToggle.displayName = 'ViewModeToggle';
export default ViewModeToggle;
