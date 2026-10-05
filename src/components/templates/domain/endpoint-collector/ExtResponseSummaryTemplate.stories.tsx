import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExtResponseSummaryTemplate } from './ExtResponseSummaryTemplate';

const meta: Meta<typeof ExtResponseSummaryTemplate> = {
  title: 'Templates/ExtResponseSummaryTemplate',
  component: ExtResponseSummaryTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExtResponseSummaryTemplate>;

export const Default: Story = {
  render: () => (
    <ExtResponseSummaryTemplate
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Collected Responses' }]}
      tableProps={{
        name: 'Responses',
        columns: [
          { id: 'responseId', label: 'Response ID', isSortable: true },
          { id: 'endpoint', label: 'Endpoint' },
          { id: 'statusCode', label: 'Status Code' },
          { id: 'timestamp', label: 'Timestamp' },
        ],
        keyColumn: 'responseId',
        data: [
          { responseId: 'resp-001', endpoint: 'https://api.example.com/v1', statusCode: 200, timestamp: '2026-10-05 10:00:00' },
          { responseId: 'resp-002', endpoint: 'https://api.example.com/v2', statusCode: 500, timestamp: '2026-10-05 10:05:00' },
        ],
        totalElements: 2,
        pageIndex: 0,
        pageSize: 10,
        orderBy: 'responseId',
        onPageChange: () => {},
      }}
    />
  ),
};
