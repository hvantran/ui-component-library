import React from 'react';
import { cn } from '../../../utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  errorMessage?: string;
  label?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, errorMessage, label, helperText, id, disabled, ...props }, ref) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium text-secondary-900 dark:text-secondary-100"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={
            error && errorMessage ? errorId : helperText ? helperId : undefined
          }
          className={cn(
            'w-full px-3 py-2 text-sm rounded-btn border transition-colors outline-none font-sans',
            'bg-surface-card-light dark:bg-surface-card-dark text-secondary-900 dark:text-white',
            'placeholder:text-secondary-400 dark:placeholder:text-secondary-500',
            'border-secondary-300 dark:border-secondary-700',
            'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
            error && 'border-error-500 focus:border-error-500 focus:ring-error-500/20',
            disabled && 'opacity-50 cursor-not-allowed bg-secondary-100 dark:bg-secondary-800',
            className
          )}
          rows={props.rows || 4}
          {...props}
        />
        {error && errorMessage ? (
          <span id={errorId} role="alert" className="text-xs text-error-600 dark:text-error-400">
            {errorMessage}
          </span>
        ) : helperText ? (
          <span id={helperId} className="text-xs text-secondary-500 dark:text-secondary-400">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
