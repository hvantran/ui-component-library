import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from '../../atoms/Badge';
import { Card } from '../../atoms/Card';
import { BoardView } from './BoardView';

const meta: Meta<typeof BoardView> = {
  title: 'Organisms/BoardView',
  component: BoardView,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BoardView>;

interface KanbanCard {
  id: string;
  title: string;
  tag: string;
  priority: 'low' | 'medium' | 'high';
}

const sampleColumns = [
  {
    id: 'backlog',
    title: 'Backlog',
    color: 'secondary' as const,
    items: [
      { id: 'c1', title: 'Refactor Auth Tokens', tag: 'Auth', priority: 'medium' as const },
      { id: 'c2', title: 'Migrate Stepper to Atomic', tag: 'UI', priority: 'high' as const },
    ],
  },
  {
    id: 'in-progress',
    title: 'In Progress',
    color: 'primary' as const,
    items: [
      { id: 'c3', title: 'Setup Storybook GitHub Pages', tag: 'DevOps', priority: 'high' as const },
    ],
  },
  {
    id: 'review',
    title: 'In Review',
    color: 'warning' as const,
    items: [
      { id: 'c4', title: 'AppTopBar Mobile Responsiveness', tag: 'UI', priority: 'low' as const },
    ],
  },
  {
    id: 'done',
    title: 'Completed',
    color: 'success' as const,
    items: [
      { id: 'c5', title: 'Scaffold ui-component-library', tag: 'Setup', priority: 'high' as const },
      { id: 'c6', title: 'Preset Tailwind configuration', tag: 'Tokens', priority: 'medium' as const },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <BoardView<KanbanCard>
      columns={sampleColumns}
      onAddItem={(colId) => alert(`Add item to ${colId}`)}
      renderCard={(item) => (
        <Card variant="outlined" className="p-3.5 bg-white dark:bg-secondary-800 text-xs shadow-sm hover:shadow transition-shadow">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-[10px]">{item.tag}</Badge>
            <span className={item.priority === 'high' ? 'text-red-500 font-semibold' : 'text-secondary-400'}>
              {item.priority}
            </span>
          </div>
          <p className="font-semibold text-secondary-900 dark:text-white text-sm">{item.title}</p>
        </Card>
      )}
    />
  ),
};
