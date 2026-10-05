import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TemplateCreationTemplate } from './TemplateCreationTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof TemplateCreationTemplate> = {
  title: 'Templates/TemplateCreationTemplate',
  component: TemplateCreationTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof TemplateCreationTemplate>;

export const Default: Story = {
  render: () => (
    <TemplateCreationTemplate
      breadcrumbs={[{ label: 'Templates', href: '#' }, { label: 'New Template' }]}
      steps={[
        {
          name: 'general',
          label: 'General Information',
          properties: [
            { propName: 'name', propValue: '', propType: PropType.InputText, propLabel: 'Template Name' },
            { propName: 'targetUrl', propValue: '', propType: PropType.InputText, propLabel: 'Target URL' },
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
