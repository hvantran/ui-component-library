import type { Meta, StoryObj } from '@storybook/react';
import { Kanban, List, Table } from 'lucide-react';
import React, { useState } from 'react';
import { ViewModeToggle } from './ViewModeToggle';

const meta: Meta<typeof ViewModeToggle> = {
  title: 'Molecules/ViewModeToggle',
  component: ViewModeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ViewModeToggle>;

const modesWithIcons = [
  { value: 'table', label: 'Table', icon: <Table className="w-4 h-4" /> },
  { value: 'board', label: 'Kanban', icon: <Kanban className="w-4 h-4" /> },
  { value: 'list', label: 'List', icon: <List className="w-4 h-4" /> },
];

export const Default: Story = {
  render: () => {
    const [mode, setMode] = useState('table');
    return (
      <ViewModeToggle
        mode={mode}
        modes={modesWithIcons}
        onChange={setMode}
      />
    );
  },
};

export const TextOnly: Story = {
  render: () => {
    const [mode, setMode] = useState('grid');
    return (
      <ViewModeToggle
        mode={mode}
        modes={[
          { value: 'grid', label: 'Grid' },
          { value: 'list', label: 'List' },
          { value: 'compact', label: 'Compact' },
        ]}
        onChange={setMode}
      />
    );
  },
};
