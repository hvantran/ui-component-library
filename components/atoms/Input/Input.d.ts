import { default as React } from '../../../../node_modules/react';
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
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
