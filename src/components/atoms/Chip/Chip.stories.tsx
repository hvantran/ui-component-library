import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'warning', 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
    variant: 'filled',
    color: 'default',
    size: 'sm',
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Warning" color="warning" />
      <Chip label="Error" color="error" />
    </div>
  ),
};

export const OutlinedColors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Chip label="Default" variant="outlined" color="default" />
      <Chip label="Primary" variant="outlined" color="primary" />
      <Chip label="Secondary" variant="outlined" color="secondary" />
      <Chip label="Success" variant="outlined" color="success" />
      <Chip label="Warning" variant="outlined" color="warning" />
      <Chip label="Error" variant="outlined" color="error" />
    </div>
  ),
};

export const Removable: Story = {
  args: {
    label: 'Removable Tag',
    color: 'primary',
    onDelete: () => alert('Deleted'),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Chip label="Small (sm)" size="sm" color="primary" />
      <Chip label="Medium (md)" size="md" color="primary" />
    </div>
  ),
};
