import { default as React } from '../../../../node_modules/react';
export type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'danger';
export type ProgressBarSize = 'sm' | 'md' | 'lg';
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Progress percentage between 0 and 100 */
    value: number;
    /** Visual variant matching status */
    variant?: ProgressBarVariant;
    /** Size dimension */
    size?: ProgressBarSize;
    /** Show label above or inside */
    label?: string;
    /** Show numeric percentage text */
    showPercentage?: boolean;
}
/**
 * Atom — ProgressBar
 *
 * Universal progress indicator for jobs, sync status, and multi-step workflows.
 */
export declare const ProgressBar: React.ForwardRefExoticComponent<ProgressBarProps & React.RefAttributes<HTMLDivElement>>;
export default ProgressBar;
