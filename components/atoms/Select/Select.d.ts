import { default as React } from '../../../../node_modules/react';
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
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export default Select;
