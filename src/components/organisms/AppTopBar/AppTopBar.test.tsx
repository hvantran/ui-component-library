import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { AppTopBar } from './AppTopBar';

describe('AppTopBar organism', () => {
  it('renders banner role and title', () => {
    const html = renderToString(
      <AppTopBar title="Project Management Console" />
    );
    expect(html).toContain('role="banner"');
    expect(html).toContain('Project Management Console');
  });

  it('renders theme toggle and mobile menu button', () => {
    const html = renderToString(
      <AppTopBar
        title="Admin"
        onMenuToggle={vi.fn()}
        onThemeToggle={vi.fn()}
        isDarkMode={false}
      />
    );
    expect(html).toContain('aria-label="Toggle navigation menu"');
    expect(html).toContain('aria-label="Switch to dark theme"');
  });
});
