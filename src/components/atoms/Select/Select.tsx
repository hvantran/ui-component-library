import React from 'react';
import { cn } from '../../../utils/cn';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Field label above select */
  label?: string;
  /** Error message displayed beneath select */
  error?: string;
  /** Informational helper text */
  helperText?: string;
  /** Full-width expansion */
  fullWidth?: boolean;
  /** List of predefined options */
  options?: SelectOption[];
  /** Optional placeholder text when empty */
  placeholder?: string;
}

/**
 * Atom — Select
 *
 * Reusable select dropdown matching the consistent form inputs styling.
 * Supports accessible error messages, helper text, and keyboard navigation.
 */
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      error,
      helperText,
      fullWidth = true,
      options = [],
      placeholder,
      disabled,
      required,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const selectId = id || generatedId;
    const errorId = `${selectId}-error`;
    const helperId = `${selectId}-helper`;

    const hasError = Boolean(error);

    return (
      <div className={cn('flex flex-col gap-1', fullWidth ? 'w-full' : 'inline-block')}>
        {label && (
          <label
            htmlFor={selectId}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            aria-invalid={hasError ? true : undefined}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              'border border-gray-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500',
              'text-gray-900 bg-white transition duration-150 ease-in-out text-sm appearance-none',
              'dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100',
              fullWidth ? 'w-full' : 'w-auto',
              hasError &&
                'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-900 dark:text-red-300',
              disabled &&
                'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-900',
              className,
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
            {children}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-400">
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {hasError ? (
          <p id={errorId} className="text-xs text-red-600 dark:text-red-400 mt-0.5">
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Select.displayName = 'Select';
export default Select;
