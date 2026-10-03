import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your action name...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Action Name',
    placeholder: 'e.g. Sync Customer Database',
    required: true,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Cron Schedule',
    placeholder: '0 0 * * *',
    helperText: 'Standard 5-part cron syntax representing minute, hour, day, month, day of week.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Action Name',
    value: 'A',
    error: 'Action name must be between 2 and 255 characters',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Immutable Identifier',
    value: 'act_109283948',
    disabled: true,
  },
};

export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Input label="Text" type="text" placeholder="Regular text input" />
      <Input label="Email" type="email" placeholder="john.doe@example.com" />
      <Input label="Password" type="password" value="secretpassword" readOnly />
      <Input label="Number" type="number" placeholder="42" />
    </div>
  ),
};
