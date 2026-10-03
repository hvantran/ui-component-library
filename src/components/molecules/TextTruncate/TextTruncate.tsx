import React from 'react';
import { Tooltip } from '../../atoms/Tooltip';
import { cn } from '../../../utils/cn';

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

function truncateString(str: string, max: number): string {
  return str.length > max ? `${str.slice(0, max)}...` : str;
}

/**
 * Molecule — TextTruncate
 *
 * Truncates overflowing strings with an ellipsis and renders an accessible
 * Tooltip displaying the complete string on hover/focus.
 */
export const TextTruncate: React.FC<TextTruncateProps> = ({
  text,
  maxLength,
  maxTextLength,
  tooltipVisible,
  tooltipVisiable,
  className,
}) => {
  if (!text) {
    return <span className={className} />;
  }

  const limit = maxLength ?? maxTextLength ?? 30;
  const showTooltip = (tooltipVisible ?? tooltipVisiable ?? true) && text.length > limit;
  const isTruncated = text.length > limit;
  const displayed = truncateString(text, limit);

  const spanContent = (
    <span className={cn('inline-block truncate max-w-full align-bottom', className)}>
      {displayed}
    </span>
  );

  if (isTruncated && showTooltip) {
    return <Tooltip content={text}>{spanContent}</Tooltip>;
  }

  return spanContent;
};

TextTruncate.displayName = 'TextTruncate';
export default TextTruncate;
