import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Badge } from './Badge';

describe('Badge atom', () => {
  it('renders ACTIVE status with bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-semibold', () => {
    const html = renderToString(<Badge status="ACTIVE" />);
    expect(html).toContain('bg-green-100');
    expect(html).toContain('text-green-800');
    expect(html).toContain('rounded-full px-2 py-1 text-xs font-semibold');
    expect(html).toContain('ACTIVE');
  });

  it('renders PAUSED status with bg-yellow-100 text-yellow-800', () => {
    const html = renderToString(<Badge status="PAUSED" />);
    expect(html).toContain('bg-yellow-100');
    expect(html).toContain('text-yellow-800');
  });

  it('renders FAILED status with bg-red-100 text-red-800', () => {
    const html = renderToString(<Badge status="FAILED" />);
    expect(html).toContain('bg-red-100');
    expect(html).toContain('text-red-800');
  });

  it('renders DELETED status with bg-gray-100 text-gray-800', () => {
    const html = renderToString(<Badge status="DELETED" />);
    expect(html).toContain('bg-gray-100');
    expect(html).toContain('text-gray-800');
  });

  it('renders numeric count and caps at max', () => {
    const html = renderToString(<Badge count={150} max={99} variant="primary" />);
    expect(html).toContain('99+');
    expect(html).toContain('bg-blue-100');
  });

  it('renders dot indicator', () => {
    const html = renderToString(<Badge status="ACTIVE" dot />);
    expect(html).toContain('h-1.5 w-1.5 rounded-full');
  });
});
