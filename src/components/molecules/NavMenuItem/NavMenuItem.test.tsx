import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { NavMenuItem } from './NavMenuItem';

describe('NavMenuItem', () => {
  it('renders label and icon when expanded', () => {
    const html = renderToString(
      <NavMenuItem icon={<span data-testid="icon">icon</span>} label="Dashboard" />,
    );
    expect(html).toContain('Dashboard');
    expect(html).toContain('data-testid="icon"');
    expect(html).toContain('px-4 justify-start');
  });

  it('hides label when collapsed and sets title attribute', () => {
    const html = renderToString(
      <NavMenuItem icon={<span>icon</span>} label="Settings" collapsed={true} />,
    );
    expect(html).not.toContain('<span class="text-sm leading-5 whitespace-nowrap">Settings</span>');
    expect(html).toContain('title="Settings"');
    expect(html).toContain('px-3 justify-center');
  });

  it('renders active styling with left border highlight', () => {
    const html = renderToString(
      <NavMenuItem icon={<span>icon</span>} label="Reports" active={true} />,
    );
    expect(html).toContain('border-l-blue-600');
    expect(html).toContain('bg-blue-50');
  });
});
