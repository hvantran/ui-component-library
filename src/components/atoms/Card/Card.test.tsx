import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Card } from './Card';

describe('Card atom', () => {
  it('renders default card with p-4 padding and shadow-sm', () => {
    const html = renderToString(<Card>Card Content</Card>);
    expect(html).toContain('p-4');
    expect(html).toContain('border-gray-200');
    expect(html).toContain('shadow-sm');
    expect(html).toContain('Card Content');
  });

  it('renders elevated variant with shadow-md and hover:shadow-lg', () => {
    const html = renderToString(<Card variant="elevated" padding="lg">Elevated</Card>);
    expect(html).toContain('shadow-md');
    expect(html).toContain('hover:shadow-lg');
    expect(html).toContain('p-6');
  });

  it('renders outlined variant', () => {
    const html = renderToString(<Card variant="outlined">Outlined</Card>);
    expect(html).toContain('border-gray-200');
    expect(html).not.toContain('shadow-md');
  });

  it('renders interactive and selected styles', () => {
    const html = renderToString(<Card interactive selected>Selected</Card>);
    expect(html).toContain('cursor-pointer');
    expect(html).toContain('border-blue-500');
    expect(html).toContain('ring-2 ring-blue-500');
  });
});
