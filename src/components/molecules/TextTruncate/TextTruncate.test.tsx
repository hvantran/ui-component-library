import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { TextTruncate } from './TextTruncate';

describe('TextTruncate molecule', () => {
  it('renders short text without truncation or tooltip', () => {
    const html = renderToString(<TextTruncate text="Short label" maxLength={20} />);
    expect(html).toContain('Short label');
    expect(html).not.toContain('...');
    expect(html).not.toContain('role="tooltip"');
  });

  it('truncates long text and wraps with Tooltip', () => {
    const html = renderToString(
      <TextTruncate
        text="A very long sentence that will exceed the specified maximum limit"
        maxLength={15}
      />,
    );
    expect(html).toContain('A very long sen...');
    expect(html).toContain('role="tooltip"');
    expect(html).toContain('A very long sentence that will exceed the specified maximum limit');
  });

  it('supports backwards compatible maxTextLength and tooltipVisiable props', () => {
    const html = renderToString(
      <TextTruncate
        text="Backwards compatible property testing"
        maxTextLength={10}
        tooltipVisiable={false}
      />,
    );
    expect(html).toContain('Backwards ...');
    expect(html).not.toContain('role="tooltip"');
  });

  it('renders empty span when text is absent', () => {
    const html = renderToString(<TextTruncate />);
    expect(html).toBe('<span></span>');
  });
});
