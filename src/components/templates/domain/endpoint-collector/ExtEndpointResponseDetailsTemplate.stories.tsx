import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExtEndpointResponseDetailsTemplate } from './ExtEndpointResponseDetailsTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof ExtEndpointResponseDetailsTemplate> = {
  title: 'Templates/ExtEndpointResponseDetailsTemplate',
  component: ExtEndpointResponseDetailsTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExtEndpointResponseDetailsTemplate>;

export const Default: Story = {
  render: () => (
    <ExtEndpointResponseDetailsTemplate
      breadcrumbs={[{ label: 'Responses', href: '#' }, { label: 'Response Details' }]}
      properties={[
        { propName: 'id', propValue: 'resp-9871', propType: PropType.InputText, propLabel: 'Response ID' },
        { propName: 'statusCode', propValue: '200', propType: PropType.InputText, propLabel: 'HTTP Status' },
        { propName: 'responseTime', propValue: '124ms', propType: PropType.InputText, propLabel: 'Latency' },
      ]}
      onPropertyChange={() => {}}
    />
  ),
};
