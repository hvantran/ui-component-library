import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { JobDetailTemplate } from './JobDetailTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof JobDetailTemplate> = {
  title: 'Templates/JobDetailTemplate',
  component: JobDetailTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof JobDetailTemplate>;

export const Default: Story = {
  render: () => (
    <JobDetailTemplate
      breadcrumbs={[{ label: 'Jobs', href: '#' }, { label: 'Job Details' }]}
      properties={[
        { propName: 'jobId', propValue: 'job-101', propType: PropType.InputText, propLabel: 'Job ID' },
        { propName: 'actionName', propValue: 'Lazada Poller', propType: PropType.InputText, propLabel: 'Action Name' },
        { propName: 'status', propValue: 'COMPLETED', propType: PropType.Selection, propLabel: 'Status' },
        { propName: 'duration', propValue: '42s', propType: PropType.InputText, propLabel: 'Duration' },
      ]}
      onPropertyChange={() => {}}
    />
  ),
};
