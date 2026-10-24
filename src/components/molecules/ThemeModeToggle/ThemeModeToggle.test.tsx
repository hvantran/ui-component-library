import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ThemeProvider } from '../../../theme/ThemeProvider';
import { ThemeModeToggle } from './ThemeModeToggle';

describe('ThemeModeToggle', () => {
  it('renders single button mode and cycles light -> dark -> system', () => {
    const onThemeChange = vi.fn();
    render(<ThemeModeToggle mode="light" onModeChange={onThemeChange} variant="button" />);

    const button = screen.getByRole('button', { name: 'Theme mode selector' });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onThemeChange).toHaveBeenCalledWith('dark');
  });

  it('renders segmented mode and changes theme on option click', () => {
    const onThemeChange = vi.fn();
    render(<ThemeModeToggle mode="light" onModeChange={onThemeChange} variant="segmented" />);

    const darkRadio = screen.getByRole('radio', { name: 'Dark theme' });
    fireEvent.click(darkRadio);
    expect(onThemeChange).toHaveBeenCalledWith('dark');

    const systemRadio = screen.getByRole('radio', { name: 'System theme' });
    fireEvent.click(systemRadio);
    expect(onThemeChange).toHaveBeenCalledWith('system');
  });

  it('integrates with ThemeProvider when uncontrolled', () => {
    render(
      <ThemeProvider defaultTheme="system">
        <ThemeModeToggle variant="segmented" />
      </ThemeProvider>
    );

    const systemRadio = screen.getByRole('radio', { name: 'System theme' });
    expect(systemRadio).toHaveAttribute('aria-checked', 'true');
  });
});
