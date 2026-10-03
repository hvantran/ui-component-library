import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from '../components/atoms/Card';
import { DarkModeToggle } from '../components/molecules/DarkModeToggle';
import { ThemeProvider, useTheme } from './ThemeProvider';

function ThemeDemo() {
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  return (
    <Card variant="outlined" className="p-6 max-w-md w-full space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold text-secondary-900 dark:text-white">Theme Engine</h3>
          <p className="text-xs text-secondary-500">Current mode: {theme} ({resolvedTheme})</p>
        </div>
        <DarkModeToggle isDark={resolvedTheme === 'dark'} onToggle={toggleTheme} />
      </div>

      <p className="text-sm text-secondary-600 dark:text-secondary-300">
        ThemeProvider injects <code>dark</code> class and <code>data-theme</code> attribute into
        the root HTML element, syncing seamlessly with Tailwind dark mode classes.
      </p>
    </Card>
  );
}

const meta: Meta = {
  title: '00-Tokens/ThemeEngine',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <ThemeDemo />
    </ThemeProvider>
  ),
};
