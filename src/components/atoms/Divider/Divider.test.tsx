import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Divider } from './Divider';

describe('Divider atom', () => {
  it('renders horizontal separator hr by default', () => {
    const html = renderToString(<Divider />);
    expect(html).toContain('role="separator"');
    expect(html).toContain('aria-orientation="horizontal"');
  });

  it('renders vertical separator', () => {
    const html = renderToString(<Divider orientation="vertical" />);
    expect(html).toContain('aria-orientation="vertical"');
  });

  it('renders labeled divider', () => {
    const html = renderToString(<Divider label="OR" />);
    expect(html).toContain('OR');
  });
});
