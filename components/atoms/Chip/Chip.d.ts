import { default as React } from '../../../../node_modules/react';
export type ChipVariant = 'filled' | 'outlined';
export type ChipSize = 'sm' | 'md';
export type ChipColor = 'default' | 'primary' | 'secondary' | 'warning' | 'error' | 'success';
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Label content */
    label?: React.ReactNode;
    /** Visual style variant */
    variant?: ChipVariant;
    /** Size dimension */
    size?: ChipSize;
    /** Color theme */
    color?: ChipColor;
    /** Leading icon element */
    icon?: React.ReactNode;
    /** Callback fired when delete icon is clicked */
    onDelete?: () => void;
    /** Custom delete icon */
    deleteIcon?: React.ReactNode;
    /** Click handler for clickable chips */
    onClick?: () => void;
    /** Disabled state */
    disabled?: boolean;
}
/**
 * Atom — Chip
 *
 * Compact interactive element for tags, filters, status indicators, and removable tokens.
 * Compliant with Atomic Design and Tailwind-first policy with full keyboard accessibility.
 */
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLSpanElement>>;
export default Chip;
