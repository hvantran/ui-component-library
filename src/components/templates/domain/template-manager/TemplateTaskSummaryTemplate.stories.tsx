import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TemplateTaskSummaryTemplate } from './TemplateTaskSummaryTemplate';

const meta: Meta<typeof TemplateTaskSummaryTemplate> = {
  title: 'Templates/TemplateTaskSummaryTemplate',
  component: TemplateTaskSummaryTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof TemplateTaskSummaryTemplate>;

export const Default: Story = {
  render: () => (
    <TemplateTaskSummaryTemplate
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Template Tasks' }]}
      tableProps={{
        name: 'Template Tasks',
        columns: [
          { id: 'taskName', label: 'Task Name', isSortable: true },
          { id: 'status', label: 'Status' },
        ],
        keyColumn: 'taskName',
        pagingResult: {
          totalElements: 1,
          content: [{ taskName: 'Price Extraction Task', status: 'SUCCESS' }],
        },
        pagingOptions: {
          pageIndex: 0,
          pageSize: 10,
          orderBy: 'taskName',
          searchText: '',
          rowsPerPageOptions: [10, 20, 50],
          onPageChange: () => {},
        },
      }}
    />
  ),
};
