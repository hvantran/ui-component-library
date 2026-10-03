import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

const sampleOptions = [
  { value: 'active', label: 'Active' },
  { value: 'paused', label: 'Paused' },
  { value: 'completed', label: 'Completed' },
  { value: 'archived', label: 'Archived', disabled: true },
];

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose status...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Action Status',
    options: sampleOptions,
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Action Status',
    options: sampleOptions,
    error: 'Please select a valid action status',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Action Status',
    options: sampleOptions,
    helperText: 'Controls execution lifecycle in the poller engine.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Action Status',
    options: sampleOptions,
    disabled: true,
    value: 'active',
  },
};
