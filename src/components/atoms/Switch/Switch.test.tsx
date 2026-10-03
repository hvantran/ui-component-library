import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Switch } from './Switch';

describe('Switch atom', () => {
  it('renders switch input with role switch', () => {
    const html = renderToString(<Switch label="Enable notifications" />);
    expect(html).toContain('role="switch"');
    expect(html).toContain('Enable notifications');
  });

  it('renders description text and checked state', () => {
    const html = renderToString(
      <Switch label="Dark Mode" description="Use dark theme across app" checked readOnly />
    );
    expect(html).toContain('Dark Mode');
    expect(html).toContain('Use dark theme across app');
    expect(html).toContain('aria-checked="true"');
  });
});
