import React from 'react';
import { cn } from '../../../utils/cn';

export interface FormFieldProps {
  /** Label for the field */
  label?: React.ReactNode;
  /** HTML ID of target input for accessible label linking */
  htmlFor?: string;
  /** Marks field as mandatory with asterisk */
  required?: boolean;
  /** Error message displayed beneath input */
  error?: string;
  /** Explanatory helper text beneath input */
  helperText?: string;
  /** Additional container styling */
  className?: string;
  /** Child form element */
  children: React.ReactNode;
}

/**
 * Molecule — FormField
 *
 * Composes a standard label, required indicator, child control slot,
 * and accessible error/helper messaging.
 */
export const FormField: React.FC<FormFieldProps> = ({
  label,
  htmlFor,
  required,
  error,
  helperText,
  className,
  children,
}) => {
  return (
    <div className={cn('flex flex-col gap-1 w-full', className)}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      {children}

      {error ? (
        <p className="text-xs text-red-600 dark:text-red-400 mt-0.5">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{helperText}</p>
      ) : null}
    </div>
  );
};

FormField.displayName = 'FormField';
export default FormField;
