import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ThemeMode } from '../../../theme/ThemeProvider';
import { ThemeModeToggle } from './ThemeModeToggle';

const meta: Meta<typeof ThemeModeToggle> = {
  title: 'Molecules/ThemeModeToggle',
  component: ThemeModeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeModeToggle>;

export const DefaultButton: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mode, setMode] = useState<ThemeMode>('system');
    return <ThemeModeToggle mode={mode} onModeChange={setMode} variant="button" />;
  },
};

export const Segmented: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mode, setMode] = useState<ThemeMode>('system');
    return <ThemeModeToggle mode={mode} onModeChange={setMode} variant="segmented" />;
  },
};

