import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';
import React from 'react';
import { Card } from '../../atoms/Card';
import { BoardColumn } from './BoardColumn';

const meta: Meta<typeof BoardColumn> = {
  title: 'Organisms/BoardColumn',
  component: BoardColumn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BoardColumn>;

export const Default: Story = {
  render: () => (
    <div className="h-[450px]">
      <BoardColumn
        id="in-progress"
        title="In Progress"
        color="primary"
        action={
          <button
            type="button"
            aria-label="Add item"
            className="p-1 text-secondary-500 hover:text-secondary-800 rounded hover:bg-secondary-200/50"
          >
            <Plus className="w-4 h-4" />
          </button>
        }
      >
        <Card variant="outlined" className="p-3 bg-white dark:bg-secondary-800 text-xs shadow-sm">
          <p className="font-semibold text-secondary-900 dark:text-white">Implement Webhook Poller</p>
          <p className="text-secondary-500 mt-1">Hasaki API sync task</p>
        </Card>
        <Card variant="outlined" className="p-3 bg-white dark:bg-secondary-800 text-xs shadow-sm">
          <p className="font-semibold text-secondary-900 dark:text-white">Add Storybook Coverage</p>
          <p className="text-secondary-500 mt-1">Organisms test pass</p>
        </Card>
      </BoardColumn>
    </div>
  ),
};
