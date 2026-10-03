import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it, vi } from 'vitest';
import { DarkModeToggle } from './DarkModeToggle';

describe('DarkModeToggle molecule', () => {
  it('renders switch variant and indicates dark state', () => {
    const htmlLight = renderToString(<DarkModeToggle isDark={false} onToggle={vi.fn()} />);
    expect(htmlLight).toContain('role="switch"');
    expect(htmlLight).toContain('aria-checked="false"');

    const htmlDark = renderToString(<DarkModeToggle isDark={true} onToggle={vi.fn()} />);
    expect(htmlDark).toContain('aria-checked="true"');
    expect(htmlDark).toContain('bg-primary-600');
  });

  it('renders button variant', () => {
    const htmlButton = renderToString(
      <DarkModeToggle
        isDark={false}
        onToggle={vi.fn()}
        variant="button"
        ariaLabel="Custom Theme Switcher"
      />
    );
    expect(htmlButton).toContain('role="button"');
    expect(htmlButton).toContain('aria-label="Custom Theme Switcher"');
  });
});
