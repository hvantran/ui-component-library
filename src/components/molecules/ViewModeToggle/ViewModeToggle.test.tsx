import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { ViewModeToggle } from './ViewModeToggle';

describe('ViewModeToggle molecule', () => {
  const modes = [
    { value: 'table', label: 'Table' },
    { value: 'board', label: 'Board' },
    { value: 'list', label: 'List' },
  ];

  it('renders all mode options and indicates the active one', () => {
    const html = renderToString(<ViewModeToggle mode="table" modes={modes} onChange={vi.fn()} />);

    expect(html).toContain('role="group"');
    expect(html).toContain('Table');
    expect(html).toContain('Board');
    expect(html).toContain('List');
    expect(html).toContain('aria-checked="true"');
    expect(html).toContain('aria-checked="false"');
  });
});
