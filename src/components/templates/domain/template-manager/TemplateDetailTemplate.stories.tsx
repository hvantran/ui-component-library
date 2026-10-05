import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TemplateDetailTemplate } from './TemplateDetailTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof TemplateDetailTemplate> = {
  title: 'Templates/TemplateDetailTemplate',
  component: TemplateDetailTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof TemplateDetailTemplate>;

export const Default: Story = {
  render: () => (
    <TemplateDetailTemplate
      breadcrumbs={[{ label: 'Templates', href: '#' }, { label: 'Lazada Poller' }]}
      properties={[
        { propName: 'name', propValue: 'Lazada Poller', propType: PropType.InputText, propLabel: 'Template Name' },
        { propName: 'description', propValue: 'Poller for cosmetics', propType: PropType.Textarea, propLabel: 'Description' },
      ]}
      onPropertyChange={() => {}}
    />
  ),
};
