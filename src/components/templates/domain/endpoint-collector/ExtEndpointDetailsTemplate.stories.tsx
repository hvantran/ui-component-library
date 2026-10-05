import React from 'react';
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
