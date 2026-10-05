import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExtEndpointCreationTemplate } from './ExtEndpointCreationTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof ExtEndpointCreationTemplate> = {
  title: 'Templates/ExtEndpointCreationTemplate',
  component: ExtEndpointCreationTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExtEndpointCreationTemplate>;

export const Default: Story = {
  render: () => (
    <ExtEndpointCreationTemplate
      breadcrumbs={[{ label: 'Endpoints', href: '#' }, { label: 'New Endpoint' }]}
      steps={[
        {
          name: 'general',
          label: 'Endpoint Configuration',
          properties: [
            { propName: 'url', propValue: '', propType: PropType.InputText, propLabel: 'URL' },
            { propName: 'method', propValue: 'GET', propType: PropType.Selection, propLabel: 'Method' },
          ],
        },
      ]}
      activeStep={0}
      onStepChange={() => {}}
      onPropertyChange={() => {}}
      onFinish={() => {}}
    />
  ),
};
