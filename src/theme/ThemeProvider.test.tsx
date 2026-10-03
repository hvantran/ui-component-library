import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeProvider';

function TestConsumer() {
  const { theme, resolvedTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
    </div>
  );
}

describe('ThemeProvider & useTheme', () => {
  it('renders children with provided default theme', () => {
    const html = renderToString(
      <ThemeProvider defaultTheme="dark">
        <TestConsumer />
      </ThemeProvider>
    );

    expect(html).toContain('data-testid="theme"');
    expect(html).toContain('dark');
  });

  it('renders light theme default correctly', () => {
    const html = renderToString(
      <ThemeProvider defaultTheme="light">
        <TestConsumer />
      </ThemeProvider>
    );

    expect(html).toContain('light');
  });
});
