import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TemplateTaskCreationTemplate } from './TemplateTaskCreationTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof TemplateTaskCreationTemplate> = {
  title: 'Templates/TemplateTaskCreationTemplate',
  component: TemplateTaskCreationTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof TemplateTaskCreationTemplate>;

export const Default: Story = {
  render: () => (
    <TemplateTaskCreationTemplate
      breadcrumbs={[{ label: 'Template Tasks', href: '#' }, { label: 'New Task' }]}
      steps={[
        {
          name: 'step1',
          label: 'Task Setup',
          properties: [
            { propName: 'taskName', propValue: '', propType: PropType.InputText, propLabel: 'Task Name' },
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
