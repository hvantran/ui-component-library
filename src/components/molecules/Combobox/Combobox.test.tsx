import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { Combobox } from './Combobox';

describe('Combobox molecule', () => {
  const options = [
    { value: 'tmpl-1', label: 'Template One' },
    { value: 'tmpl-2', label: 'Template Two' },
    { value: 'tmpl-3', label: 'Endpoint Three' },
  ];

  it('renders closed with placeholder', () => {
    const html = renderToString(
      <Combobox options={options} onChange={vi.fn()} placeholder="Choose template" />
    );
    expect(html).toContain('Choose template');
    expect(html).toContain('role="combobox"');
    expect(html).toContain('aria-expanded="false"');
  });

  it('renders with selected value label', () => {
    const html = renderToString(
      <Combobox options={options} value="tmpl-2" onChange={vi.fn()} />
    );
    expect(html).toContain('Template Two');
    expect(html).toContain('aria-label="Clear selection"');
  });
});
