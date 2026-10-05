import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { JobCreationTemplate } from './JobCreationTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof JobCreationTemplate> = {
  title: 'Templates/JobCreationTemplate',
  component: JobCreationTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof JobCreationTemplate>;

export const Default: Story = {
  render: () => (
    <JobCreationTemplate
      breadcrumbs={[{ label: 'Jobs', href: '#' }, { label: 'New Job' }]}
      steps={[
        {
          name: 'general',
          label: 'Job Configuration',
          properties: [
            { propName: 'actionId', propValue: '', propType: PropType.Selection, propLabel: 'Associated Action' },
            { propName: 'triggerType', propValue: 'MANUAL', propType: PropType.Selection, propLabel: 'Trigger Type' },
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
