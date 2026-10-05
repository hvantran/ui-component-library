import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionSummaryTemplate } from './ActionSummaryTemplate';

const meta: Meta<typeof ActionSummaryTemplate> = {
  title: 'Templates/ActionSummaryTemplate',
  component: ActionSummaryTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ActionSummaryTemplate>;

const sampleColumns = [
  { id: 'todo', title: 'To Do', cardIds: ['1'] },
  { id: 'in_progress', title: 'In Progress', cardIds: ['2'] },
  { id: 'done', title: 'Done', cardIds: ['3'] },
];

const sampleCards: Record<string, { id: string; title: string; subtitle?: string; status?: string }> = {
  '1': { id: '1', title: 'Run database migration', subtitle: 'Ops Team', status: 'TODO' },
  '2': { id: '2', title: 'Sync product inventory', subtitle: 'Poller Service', status: 'IN_PROGRESS' },
  '3': { id: '3', title: 'Backup cluster volumes', subtitle: 'Infra', status: 'DONE' },
};

export const BoardMode: Story = {
  render: () => (
    <ActionSummaryTemplate
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Action Board' }]}
      defaultViewMode="board"
      boardProps={{
        columns: sampleColumns,
        cards: sampleCards,
        onCardClick: () => {},
      }}
      tableProps={{
        name: 'Actions',
        columns: [
          { id: 'id', label: 'Action ID', isSortable: true },
          { id: 'title', label: 'Title' },
          { id: 'status', label: 'Status' },
        ],
        keyColumn: 'id',
        data: Object.values(sampleCards),
        totalElements: 3,
        pageIndex: 0,
        pageSize: 10,
        orderBy: 'id',
        onPageChange: () => {},
      }}
    />
  ),
};

export const ListMode: Story = {
  render: () => (
    <ActionSummaryTemplate
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Action List' }]}
      defaultViewMode="list"
      boardProps={{
        columns: sampleColumns,
        cards: sampleCards,
      }}
      tableProps={{
        name: 'Actions',
        columns: [
          { id: 'id', label: 'Action ID', isSortable: true },
          { id: 'title', label: 'Title' },
          { id: 'status', label: 'Status' },
        ],
        keyColumn: 'id',
        data: Object.values(sampleCards),
        totalElements: 3,
        pageIndex: 0,
        pageSize: 10,
        orderBy: 'id',
        onPageChange: () => {},
      }}
    />
  ),
};
