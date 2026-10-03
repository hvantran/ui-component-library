import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['ACTIVE', 'PAUSED', 'FAILED', 'DELETED'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
    },
    dot: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const StatusActive: Story = {
  args: {
    status: 'ACTIVE',
  },
};

export const StatusPaused: Story = {
  args: {
    status: 'PAUSED',
  },
};

export const StatusFailed: Story = {
  args: {
    status: 'FAILED',
  },
};

export const StatusDeleted: Story = {
  args: {
    status: 'DELETED',
  },
};

export const WithDot: Story = {
  args: {
    status: 'ACTIVE',
    dot: true,
  },
};

export const NumericCounter: Story = {
  args: {
    variant: 'primary',
    count: 24,
  },
};

export const NumericCounterCapped: Story = {
  args: {
    variant: 'danger',
    count: 142,
    max: 99,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge status="ACTIVE" dot />
      <Badge status="PAUSED" dot />
      <Badge status="FAILED" dot />
      <Badge status="DELETED" dot />
      <Badge variant="primary">Custom Label</Badge>
    </div>
  ),
};
