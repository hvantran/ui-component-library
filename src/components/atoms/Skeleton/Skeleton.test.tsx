import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Skeleton } from './Skeleton';

describe('Skeleton atom', () => {
  it('renders default text skeleton with pulse animation', () => {
    const html = renderToString(<Skeleton />);
    expect(html).toContain('role="status"');
    expect(html).toContain('animate-pulse');
    expect(html).toContain('bg-gray-200');
    expect(html).toContain('Loading...');
  });

  it('renders circular variant with rounded-full', () => {
    const html = renderToString(<Skeleton variant="circular" width={40} height={40} />);
    expect(html).toContain('rounded-full');
    expect(html).toContain('width:40px');
    expect(html).toContain('height:40px');
  });

  it('renders rectangular variant with rounded-none', () => {
    const html = renderToString(<Skeleton variant="rectangular" />);
    expect(html).toContain('rounded-none');
  });

  it('handles custom dimension string', () => {
    const html = renderToString(<Skeleton width="50%" height="2rem" />);
    expect(html).toContain('width:50%');
    expect(html).toContain('height:2rem');
  });
});
