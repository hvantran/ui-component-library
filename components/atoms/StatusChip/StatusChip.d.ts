import { default as React } from '../../../../node_modules/react';
export type StatusChipVariant = 'proctoring' | 'pending' | 'draft' | 'published' | 'active' | 'neutral' | 'success' | 'warning' | 'error';
export type StatusChipSize = 'sm' | 'md' | 'small' | 'medium';
export interface StatusChipProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Text label or content displayed in chip */
    label: React.ReactNode;
    /** Visual status variant */
    variant?: StatusChipVariant;
    /** Leading icon */
    icon?: React.ReactNode;
    /** Optional delete/close callback */
    onDelete?: () => void;
    /** Size dimension */
    size?: StatusChipSize;
}
/**
 * Atom — StatusChip
 *
 * Pill-shaped status indicator used for workflow states, proctoring states,
 * and review counters with dark-mode and keyboard accessibility support.
 */
export declare const StatusChip: React.ForwardRefExoticComponent<StatusChipProps & React.RefAttributes<HTMLSpanElement>>;
export default StatusChip;
