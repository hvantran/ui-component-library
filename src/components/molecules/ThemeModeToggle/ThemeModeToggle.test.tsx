import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { ThemeModeToggle } from './ThemeModeToggle';

describe('ThemeModeToggle molecule', () => {
  it('renders button variant and sets title/aria-label', () => {
    const html = renderToString(
      <ThemeModeToggle mode="light" onModeChange={vi.fn()} variant="button" />
    );
    expect(html).toContain('aria-label="Theme mode selector"');
    expect(html).toContain('title="Theme: light (click to cycle)"');
  });

  it('renders segmented variant with all 3 theme options', () => {
    const html = renderToString(
      <ThemeModeToggle mode="system" onModeChange={vi.fn()} variant="segmented" />
    );
    expect(html).toContain('role="radiogroup"');
    expect(html).toContain('aria-label="Light theme"');
    expect(html).toContain('aria-label="Dark theme"');
    expect(html).toContain('aria-label="System theme"');
    expect(html).toContain('aria-checked="true"');
  });

  it('integrates with ThemeProvider when uncontrolled', () => {
    const html = renderToString(
      <ThemeProvider defaultTheme="dark">
        <ThemeModeToggle variant="segmented" />
      </ThemeProvider>
    );
    expect(html).toContain('role="radiogroup"');
    expect(html).toContain('Dark');
  });
});

