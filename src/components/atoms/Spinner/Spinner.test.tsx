import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Spinner } from './Spinner';

describe('Spinner atom', () => {
  it('renders with role status and aria-label', () => {
    const html = renderToString(<Spinner />);
    expect(html).toContain('role="status"');
    expect(html).toContain('aria-label="Loading"');
    expect(html).toContain('animate-spin');
  });

  it('renders correct sizes and variants', () => {
    const smHtml = renderToString(<Spinner size="sm" variant="secondary" />);
    expect(smHtml).toContain('w-4 h-4');
    expect(smHtml).toContain('text-secondary-600');

    const lgHtml = renderToString(<Spinner size="lg" variant="white" />);
    expect(lgHtml).toContain('w-8 h-8');
    expect(lgHtml).toContain('text-white');
  });
});
