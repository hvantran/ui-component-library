import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs molecule', () => {
  it('renders breadcrumb navigation with links and active page', () => {
    const html = renderToString(
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Detail', active: true },
        ]}
      />,
    );
    expect(html).toContain('aria-label="Breadcrumb"');
    expect(html).toContain('href="/"');
    expect(html).toContain('Home');
    expect(html).toContain('aria-current="page"');
    expect(html).toContain('Detail');
  });

  it('renders custom separator', () => {
    const html = renderToString(
      <Breadcrumbs
        separator=">"
        items={[
          { label: 'A', href: '/a' },
          { label: 'B', href: '/b' },
        ]}
      />,
    );
    expect(html).toContain('&gt;');
  });
});
