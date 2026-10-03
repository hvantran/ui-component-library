import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Chip } from './Chip';

describe('Chip atom', () => {
  it('renders default filled chip with label', () => {
    const html = renderToString(<Chip label="Tag Item" />);
    expect(html).toContain('Tag Item');
    expect(html).toContain('bg-gray-100');
    expect(html).toContain('rounded-full');
  });

  it('renders primary filled variant', () => {
    const html = renderToString(<Chip label="Primary" color="primary" />);
    expect(html).toContain('bg-blue-100');
    expect(html).toContain('text-blue-800');
  });

  it('renders outlined variant', () => {
    const html = renderToString(<Chip label="Outlined" variant="outlined" color="success" />);
    expect(html).toContain('border-emerald-400');
    expect(html).toContain('text-emerald-700');
  });

  it('renders remove button when onDelete is provided', () => {
    const html = renderToString(<Chip label="Removable" onDelete={() => {}} />);
    expect(html).toContain('aria-label="Remove chip"');
    expect(html).toContain('×');
  });

  it('renders leading icon', () => {
    const html = renderToString(<Chip label="With Icon" icon={<span data-testid="test-icon">★</span>} />);
    expect(html).toContain('data-testid="test-icon"');
    expect(html).toContain('★');
  });
});
