import { default as React } from '../../../../node_modules/react';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
    /** Content to display in the tooltip popover */
    content?: React.ReactNode;
    /** Alias for content (MUI compatibility) */
    title?: React.ReactNode;
    /** Element that triggers the tooltip */
    children: React.ReactNode;
    /** Positioning relative to trigger element */
    position?: TooltipPosition;
    /** Whether the tooltip is disabled */
    disabled?: boolean;
    /** Additional tooltip popup class names */
    className?: string;
}
/**
 * Atom — Tooltip
 *
 * Lightweight, accessible tooltip popup without external dependencies.
 * Activated on hover or focus with configurable positions and dark mode support.
 */
export declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
