import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { FloatingActions } from './FloatingActions';

describe('FloatingActions organism', () => {
  const actions = [
    {
      actionName: 'add-user',
      actionLabel: 'Add User',
      actionIcon: <span>+U</span>,
      onClick: vi.fn(),
    },
  ];

  it('renders trigger button with aria attributes', () => {
    const html = renderToString(<FloatingActions actions={actions} ariaLabel="Speed Dial" />);
    expect(html).toContain('role="region"');
    expect(html).toContain('aria-label="Speed Dial"');
    expect(html).toContain('aria-haspopup="menu"');
    expect(html).toContain('aria-expanded="false"');
  });
});
