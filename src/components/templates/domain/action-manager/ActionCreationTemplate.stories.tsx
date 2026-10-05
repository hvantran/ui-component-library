import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ActionCreationTemplate } from './ActionCreationTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta<typeof ActionCreationTemplate> = {
  title: 'Templates/ActionCreationTemplate',
  component: ActionCreationTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ActionCreationTemplate>;

export const Default: Story = {
  render: () => (
    <ActionCreationTemplate
      breadcrumbs={[{ label: 'Actions', href: '#' }, { label: 'New Action' }]}
      steps={[
        {
          name: 'config',
          label: 'Action Configuration',
          properties: [
            { propName: 'name', propValue: '', propType: PropType.InputText, propLabel: 'Action Name' },
            { propName: 'cron', propValue: '0 * * * *', propType: PropType.InputText, propLabel: 'Schedule' },
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
