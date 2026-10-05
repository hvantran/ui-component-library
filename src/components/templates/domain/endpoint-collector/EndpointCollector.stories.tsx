import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExtEndpointSummaryTemplate } from './ExtEndpointSummaryTemplate';
import { ExtEndpointDetailsTemplate } from './ExtEndpointDetailsTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta = {
  title: 'Templates/EndpointCollector',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Summary: StoryObj<typeof ExtEndpointSummaryTemplate> = {
  render: () => (
    <ExtEndpointSummaryTemplate
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Endpoints' }]}
      tableProps={{
        name: 'Endpoints',
        columns: [
          { id: 'endpointUrl', label: 'Endpoint URL', isSortable: true },
          { id: 'method', label: 'Method' },
          { id: 'status', label: 'Status' },
        ],
        keyColumn: 'endpointUrl',
        data: [
          { endpointUrl: 'https://api.example.com/v1/data', method: 'GET', status: 'ACTIVE' },
          { endpointUrl: 'https://api.example.com/v1/events', method: 'POST', status: 'PAUSED' },
        ],
        totalElements: 2,
        pageIndex: 0,
        pageSize: 10,
        orderBy: 'endpointUrl',
        onPageChange: () => {},
      }}
    />
  ),
};

export const Details: StoryObj<typeof ExtEndpointDetailsTemplate> = {
  render: () => (
    <ExtEndpointDetailsTemplate
      breadcrumbs={[{ label: 'Endpoints', href: '#' }, { label: 'Endpoint Details' }]}
      properties={[
        { propName: 'url', propValue: 'https://api.example.com/v1/data', propType: PropType.InputText, propLabel: 'Endpoint URL' },
        { propName: 'method', propValue: 'GET', propType: PropType.Selection, propLabel: 'HTTP Method' },
      ]}
      onPropertyChange={() => {}}
    />
  ),
};
