import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormField } from './FormField';
import { Input } from '../../atoms/Input';
import { Select } from '../../atoms/Select';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const WithInput: Story = {
  args: {
    label: 'Action Target Host',
    htmlFor: 'host-input',
    required: true,
    helperText: 'FQDN or IPv4 of the remote target server.',
    children: <Input id="host-input" placeholder="e.g. backend.lazada.vn" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Execution Port',
    htmlFor: 'port-input',
    required: true,
    error: 'Port must be between 1 and 65535',
    children: (
      <Input
        id="port-input"
        type="number"
        value="99999"
        error="Port must be between 1 and 65535"
        readOnly
      />
    ),
  },
};

export const WithSelect: Story = {
  args: {
    label: 'Job Priority',
    htmlFor: 'priority-select',
    children: (
      <Select
        id="priority-select"
        options={[
          { value: 'HIGH', label: 'High Priority' },
          { value: 'MEDIUM', label: 'Medium Priority' },
          { value: 'LOW', label: 'Low Priority' },
        ]}
      />
    ),
  },
};
