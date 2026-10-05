import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TemplateTaskDetailTemplate } from './TemplateTaskDetailTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof TemplateTaskDetailTemplate> = {
  title: 'Templates/TemplateTaskDetailTemplate',
  component: TemplateTaskDetailTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof TemplateTaskDetailTemplate>;

export const Default: Story = {
  render: () => (
    <TemplateTaskDetailTemplate
      breadcrumbs={[{ label: 'Template Tasks', href: '#' }, { label: 'Task Detail' }]}
      properties={[
        { propName: 'name', propValue: 'Price Extraction Task', propType: PropType.InputText, propLabel: 'Task Name' },
        { propName: 'frequency', propValue: 'Hourly', propType: PropType.InputText, propLabel: 'Frequency' },
      ]}
      onPropertyChange={() => {}}
    />
  ),
};
