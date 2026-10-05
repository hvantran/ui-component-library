import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionDetailTemplate } from './ActionDetailTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof ActionDetailTemplate> = {
  title: 'Templates/ActionDetailTemplate',
  component: ActionDetailTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ActionDetailTemplate>;

export const Default: Story = {
  render: () => (
    <ActionDetailTemplate
      breadcrumbs={[{ label: 'Actions', href: '#' }, { label: 'Action Details' }]}
      properties={[
        { propName: 'name', propValue: 'Daily Inventory Sync', propType: PropType.InputText, propLabel: 'Action Name' },
        { propName: 'type', propValue: 'HTTP_REQUEST_MONITOR', propType: PropType.Selection, propLabel: 'Action Type' },
        { propName: 'schedule', propValue: '0 0 * * *', propType: PropType.InputText, propLabel: 'Cron Schedule' },
        { propName: 'status', propValue: 'ENABLED', propType: PropType.Selection, propLabel: 'Status' },
      ]}
      onPropertyChange={() => {}}
      onAddJob={() => alert('Add job clicked')}
      jobsTableProps={{
        name: 'Action Jobs',
        columns: [
          { id: 'jobId', label: 'Job ID', isSortable: true },
          { id: 'name', label: 'Job Name' },
          { id: 'status', label: 'Status' },
        ],
        keyColumn: 'jobId',
        pagingResult: {
          totalElements: 1,
          content: [{ jobId: 'job-1', name: 'Poller Instance 1', status: 'RUNNING' }],
        },
        pagingOptions: {
          pageIndex: 0,
          pageSize: 10,
          orderBy: 'jobId',
          searchText: '',
          rowsPerPageOptions: [10, 20],
          onPageChange: () => {},
        },
      }}
    />
  ),
};
