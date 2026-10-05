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
        data: [{ taskName: 'Price Extraction Task', status: 'SUCCESS' }],
        totalElements: 1,
        pageIndex: 0,
        pageSize: 10,
        orderBy: 'taskName',
        onPageChange: () => {},
      }}
    />
  ),
};
