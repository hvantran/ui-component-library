import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { AppSidebar } from './AppSidebar';

describe('AppSidebar organism', () => {
  const groups = [
    {
      heading: 'Services',
      items: [
        { id: 'templates', label: 'Template Manager', active: true },
        { id: 'endpoints', label: 'Endpoint Collector' },
      ],
    },
  ];

  it('renders navigation list and items', () => {
    const html = renderToString(<AppSidebar groups={groups} />);
    expect(html).toContain('role="navigation"');
    expect(html).toContain('Services');
    expect(html).toContain('Template Manager');
    expect(html).toContain('Endpoint Collector');
    expect(html).toContain('aria-current="page"');
  });

  it('renders collapse toggle button when onToggleCollapse provided', () => {
    const html = renderToString(
      <AppSidebar groups={groups} onToggleCollapse={vi.fn()} isCollapsed={false} />
    );
    expect(html).toContain('aria-label="Collapse sidebar"');
  });
});
