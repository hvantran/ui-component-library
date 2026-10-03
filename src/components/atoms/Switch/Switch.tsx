import React from 'react';
import { cn } from '../../../utils/cn';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, description, checked, disabled, id, onChange, ...props }, ref) => {
    const generatedId = React.useId();
    const switchId = id || generatedId;

    return (
      <label
        htmlFor={switchId}
        className={cn(
          'inline-flex items-center gap-3 cursor-pointer select-none',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
        <span className="relative inline-flex items-center">
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={switchId}
            checked={checked}
            disabled={disabled}
            aria-checked={checked}
            onChange={onChange}
            className="sr-only peer"
            {...props}
          />
          <span
            className={cn(
              'w-11 h-6 bg-secondary-300 dark:bg-secondary-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500/40 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[\'\'] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-secondary-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600 transition-colors'
            )}
          />
        </span>
        {(label || description) && (
          <span className="flex flex-col">
            {label && (
              <span className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-secondary-500 dark:text-secondary-400">
                {description}
              </span>
            )}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
export default Switch;
