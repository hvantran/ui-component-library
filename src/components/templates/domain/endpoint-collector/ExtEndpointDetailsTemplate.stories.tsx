import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExtEndpointDetailsTemplate } from './ExtEndpointDetailsTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof ExtEndpointDetailsTemplate> = {
  title: 'Templates/ExtEndpointDetailsTemplate',
  component: ExtEndpointDetailsTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExtEndpointDetailsTemplate>;

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('Details');

    return (
      <ExtEndpointDetailsTemplate
        breadcrumbs={[{ label: 'Endpoints', href: '#' }, { label: 'Endpoint Details' }]}
        tabs={[
          { name: 'Details', label: 'Details' },
          { name: 'Responses', label: 'Responses' },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        properties={[
          { propName: 'url', propValue: 'https://api.example.com/v1/data', propType: PropType.InputText, propLabel: 'Endpoint URL' },
          { propName: 'method', propValue: 'GET', propType: PropType.Selection, propLabel: 'HTTP Method' },
        ]}
        onPropertyChange={() => {}}
        tableProps={{
          name: 'Response Values',
          columns: [
            { id: 'id', label: 'Response ID', isSortable: true },
            { id: 'status', label: 'Status' },
          ],
          keyColumn: 'id',
          pagingResult: {
            totalElements: 1,
            content: [{ id: 'resp-1', status: '200 OK' }],
          },
          pagingOptions: {
            pageIndex: 0,
            pageSize: 10,
            orderBy: 'id',
            searchText: '',
            rowsPerPageOptions: [10, 20],
            onPageChange: () => {},
          },
        }}
      />
    );
  },
};
