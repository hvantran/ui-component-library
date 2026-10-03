import { default as React } from '../../../../node_modules/react';
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
export declare const FormField: React.FC<FormFieldProps>;
export default FormField;
