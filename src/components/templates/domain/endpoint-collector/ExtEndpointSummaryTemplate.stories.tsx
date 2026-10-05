import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExtEndpointSummaryTemplate } from './ExtEndpointSummaryTemplate';

const meta: Meta<typeof ExtEndpointSummaryTemplate> = {
  title: 'Templates/ExtEndpointSummaryTemplate',
  component: ExtEndpointSummaryTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExtEndpointSummaryTemplate>;

export const Default: Story = {
  render: () => (
    <ExtEndpointSummaryTemplate
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'External Endpoints' }]}
      tableProps={{
        name: 'Endpoints',
        columns: [
          { id: 'endpointUrl', label: 'Endpoint URL', isSortable: true },
          { id: 'method', label: 'Method' },
          { id: 'status', label: 'Status' },
        ],
        keyColumn: 'endpointUrl',
        pagingResult: {
          totalElements: 2,
          content: [
            { endpointUrl: 'https://api.example.com/v1/data', method: 'GET', status: 'ACTIVE' },
            { endpointUrl: 'https://api.example.com/v1/events', method: 'POST', status: 'PAUSED' },
          ],
        },
        pagingOptions: {
          pageIndex: 0,
          pageSize: 10,
          orderBy: 'endpointUrl',
          searchText: '',
          rowsPerPageOptions: [10, 20, 50],
          onPageChange: () => {},
        },
      }}
    />
  ),
};
