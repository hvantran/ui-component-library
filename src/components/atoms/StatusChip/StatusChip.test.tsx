import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StatusChip } from './StatusChip';

describe('StatusChip', () => {
  it('renders label and default neutral variant styling', () => {
    const html = renderToString(<StatusChip label="Draft" />);
    expect(html).toContain('bg-gray-100');
    expect(html).toContain('Draft');
  });

  it('renders active variant styling', () => {
    const html = renderToString(<StatusChip label="Active Exam" variant="active" />);
    expect(html).toContain('bg-emerald-100');
    expect(html).toContain('Active Exam');
  });

  it('renders delete close button when onDelete is provided', () => {
    const html = renderToString(<StatusChip label="Pending" onDelete={() => {}} />);
    expect(html).toContain('aria-label="Remove status chip"');
    expect(html).toContain('×');
  });
});
