import React from 'react';
import { cn } from '../../../utils/cn';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Optional field label above the input */
  label?: string;
  /** Error message displayed beneath the input in red */
  error?: string;
  /** Informational helper text displayed below the field */
  helperText?: string;
  /** Full-width expansion */
  fullWidth?: boolean;
  /** Leading or trailing icon element */
  icon?: React.ReactNode;
  /** Icon placement relative to input text */
  iconPlacement?: 'left' | 'right';
}

/**
 * Atom — Input
 *
 * Form text input supporting semantic HTML5, accessibility associations (id/htmlFor, aria-invalid),
 * Tailwind focus rings, error states, and dark mode.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      error,
      helperText,
      fullWidth = true,
      icon,
      iconPlacement = 'left',
      disabled,
      required,
      className,
      type = 'text',
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const hasError = Boolean(error);

    return (
      <div className={cn('flex flex-col gap-1', fullWidth ? 'w-full' : 'inline-block')}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <div className="relative flex items-center">
          {icon && iconPlacement === 'left' && (
            <div className="pointer-events-none absolute left-3 flex items-center text-gray-400">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            disabled={disabled}
            required={required}
            aria-invalid={hasError ? true : undefined}
            aria-describedby={
              hasError ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              'border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500',
              'text-gray-900 placeholder-gray-400 bg-white transition duration-150 ease-in-out text-sm',
              'dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-500',
              fullWidth ? 'w-full' : 'w-auto',
              icon && iconPlacement === 'left' && 'pl-10',
              icon && iconPlacement === 'right' && 'pr-10',
              hasError &&
                'border-red-500 focus:border-red-500 focus:ring-red-500 text-red-900 dark:text-red-300',
              disabled &&
                'opacity-50 cursor-not-allowed bg-gray-50 dark:bg-gray-900',
              className,
            )}
            {...props}
          />

          {icon && iconPlacement === 'right' && (
            <div className="pointer-events-none absolute right-3 flex items-center text-gray-400">
              {icon}
            </div>
          )}
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

Input.displayName = 'Input';
export default Input;
