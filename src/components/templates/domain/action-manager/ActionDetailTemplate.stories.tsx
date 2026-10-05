import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionDetailTemplate } from './ActionDetailTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof ActionDetailTemplate> = {
  title: 'Templates/ActionDetailTemplate',
  component: ActionDetailTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ActionDetailTemplate>;

export const Default: Story = {
  render: () => (
    <ActionDetailTemplate
      breadcrumbs={[{ label: 'Actions', href: '#' }, { label: 'Action Details' }]}
      properties={[
        { propName: 'name', propValue: 'Daily Inventory Sync', propType: PropType.InputText, propLabel: 'Action Name' },
        { propName: 'type', propValue: 'HTTP_REQUEST_MONITOR', propType: PropType.Selection, propLabel: 'Action Type' },
        { propName: 'schedule', propValue: '0 0 * * *', propType: PropType.InputText, propLabel: 'Cron Schedule' },
        { propName: 'status', propValue: 'ENABLED', propType: PropType.Selection, propLabel: 'Status' },
      ]}
      onPropertyChange={() => {}}
    />
  ),
};
