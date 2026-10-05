import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { JobSummaryTemplate } from './JobSummaryTemplate';

const meta: Meta<typeof JobSummaryTemplate> = {
  title: 'Templates/JobSummaryTemplate',
  component: JobSummaryTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof JobSummaryTemplate>;

export const Default: Story = {
  render: () => (
    <JobSummaryTemplate
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Jobs' }]}
      tableProps={{
        name: 'Jobs',
        columns: [
          { id: 'jobId', label: 'Job ID', isSortable: true },
          { id: 'actionName', label: 'Action' },
          { id: 'status', label: 'Status' },
          { id: 'startedAt', label: 'Started At' },
        ],
        keyColumn: 'jobId',
        data: [
          { jobId: 'job-101', actionName: 'Lazada Poller', status: 'COMPLETED', startedAt: '2026-10-05 10:00' },
          { jobId: 'job-102', actionName: 'Hasaki Poller', status: 'RUNNING', startedAt: '2026-10-05 10:15' },
        ],
        totalElements: 2,
        pageIndex: 0,
        pageSize: 10,
        orderBy: 'jobId',
        onPageChange: () => {},
      }}
    />
  ),
};
