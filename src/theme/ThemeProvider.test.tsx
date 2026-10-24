import React from 'react';
import { renderToString } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { ThemeProvider, useTheme } from './ThemeProvider';

function TestConsumer() {
  const { theme, resolvedTheme, companionElement, companionBackgroundImageUrl } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="resolved">{resolvedTheme}</span>
      <span data-testid="element">{companionElement}</span>
      <span data-testid="bg">{companionBackgroundImageUrl}</span>
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

  it('provides companion theme tokens to context consumer', () => {
    const html = renderToString(
      <ThemeProvider
        defaultTheme="light"
        companionElement="Flora"
        companionBackgroundImageUrl="https://cdn.example.com/bg.png"
      >
        <TestConsumer />
      </ThemeProvider>
    );

    expect(html).toContain('Flora');
    expect(html).toContain('https://cdn.example.com/bg.png');
  });
});
