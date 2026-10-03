import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DarkModeToggle } from './DarkModeToggle';

const meta: Meta<typeof DarkModeToggle> = {
  title: 'Molecules/DarkModeToggle',
  component: DarkModeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DarkModeToggle>;

export const Default: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);
    return <DarkModeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />;
  },
};

export const ButtonVariant: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(false);
    return (
      <DarkModeToggle
        variant="button"
        isDark={isDark}
        onToggle={() => setIsDark(!isDark)}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [isDark, setIsDark] = useState(true);
    return (
      <div className="flex items-center gap-4">
        <DarkModeToggle size="sm" isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        <DarkModeToggle size="md" isDark={isDark} onToggle={() => setIsDark(!isDark)} />
        <DarkModeToggle size="lg" isDark={isDark} onToggle={() => setIsDark(!isDark)} />
      </div>
    );
  },
};
