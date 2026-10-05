import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionSummaryTemplate } from './ActionSummaryTemplate';
import { ActionDetailTemplate } from './ActionDetailTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta = {
  title: 'Templates/ActionManager',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const SummaryBoardView: StoryObj<typeof ActionSummaryTemplate> = {
  render: () => (
    <ActionSummaryTemplate
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Actions' }]}
      defaultViewMode="board"
      boardProps={{
        columns: [
          {
            id: 'todo',
            title: 'Pending Actions',
            cards: [
              { id: '1', title: 'Validate SSL certificates', description: 'Monthly cert validation', priority: 'HIGH' },
            ],
          },
          {
            id: 'in-progress',
            title: 'Running Actions',
            cards: [
              { id: '2', title: 'Backup database', description: 'Nightly Mongo DB snapshot', priority: 'MEDIUM' },
            ],
          },
        ],
      }}
      tableProps={{
        name: 'Actions',
        columns: [
          { id: 'title', label: 'Action Title', isSortable: true },
          { id: 'priority', label: 'Priority' },
        ],
        keyColumn: 'title',
        data: [{ title: 'Validate SSL certificates', priority: 'HIGH' }],
        totalElements: 1,
        pageIndex: 0,
        pageSize: 10,
        orderBy: 'title',
        onPageChange: () => {},
      }}
    />
  ),
};

export const Detail: StoryObj<typeof ActionDetailTemplate> = {
  render: () => (
    <ActionDetailTemplate
      breadcrumbs={[{ label: 'Actions', href: '#' }, { label: 'Backup database' }]}
      properties={[
        { propName: 'name', propValue: 'Backup database', propType: PropType.InputText, propLabel: 'Action Name' },
        { propName: 'cron', propValue: '0 0 * * *', propType: PropType.InputText, propLabel: 'Cron Schedule' },
      ]}
      onPropertyChange={() => {}}
    />
  ),
};
