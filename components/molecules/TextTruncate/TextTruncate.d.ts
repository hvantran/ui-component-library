import { default as React } from '../../../../node_modules/react';
export interface TextTruncateProps {
    /** Input text to truncate */
    text?: string;
    /** Maximum number of characters before truncation */
    maxLength?: number;
    /** Alias for maxLength (backwards compatibility) */
    maxTextLength?: number;
    /** Whether to show full text in tooltip on hover/focus */
    tooltipVisible?: boolean;
    /** Typo alias for tooltipVisible */
    tooltipVisiable?: boolean;
    /** Additional container class name */
    className?: string;
}
/**
 * Molecule — TextTruncate
 *
 * Truncates overflowing strings with an ellipsis and renders an accessible
 * Tooltip displaying the complete string on hover/focus.
 */
export declare const TextTruncate: React.FC<TextTruncateProps>;
export default TextTruncate;
