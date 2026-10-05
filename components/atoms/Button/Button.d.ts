import { default as React } from '../../../../node_modules/react';
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outlined' | 'neutral' | 'accent' | 'warning';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPlacement = 'left' | 'right';
export type ButtonTextJustify = 'left' | 'center' | 'right';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual variant */
    variant?: ButtonVariant;
    /** Size dimension */
    size?: ButtonSize;
    /** Disabled state */
    disabled?: boolean;
    /** Show loading spinner and disable button */
    loading?: boolean;
    /** Expand button to fill container width */
    fullWidth?: boolean;
    /** Leading or trailing icon element */
    icon?: React.ReactNode;
    /** Position of the icon relative to children text */
    iconPlacement?: ButtonIconPlacement;
    /** Content alignment within the button */
    textJustify?: ButtonTextJustify;
}
/**
 * Atom — Button
 *
 * Universal interactive button adhering to Atomic Design principles and Tailwind-first policy.
 * Provides accessible keyboard focus, touch targets, loading spinner, and dark mode support.
 */
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
