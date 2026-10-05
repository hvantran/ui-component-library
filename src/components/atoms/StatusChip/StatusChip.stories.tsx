import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusChip } from './StatusChip';

const meta: Meta<typeof StatusChip> = {
  title: 'Atoms/StatusChip',
  component: StatusChip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'proctoring',
        'pending',
        'draft',
        'published',
        'active',
        'neutral',
        'success',
        'warning',
        'error',
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusChip>;

export const Proctoring: Story = {
  args: {
    label: 'Proctoring Active',
    variant: 'proctoring',
  },
};

export const Pending: Story = {
  args: {
    label: '2 Pending',
    variant: 'pending',
  },
};

export const Draft: Story = {
  args: {
    label: 'Draft',
    variant: 'draft',
  },
};

export const Published: Story = {
  args: {
    label: 'Published',
    variant: 'published',
  },
};

export const Active: Story = {
  args: {
    label: 'Active',
    variant: 'active',
  },
};

export const Neutral: Story = {
  args: {
    label: 'Needs Grading',
    variant: 'neutral',
  },
};

export const Removable: Story = {
  args: {
    label: 'Deletable Status',
    variant: 'warning',
    onDelete: () => alert('Status removed'),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatusChip label="Proctoring" variant="proctoring" />
      <StatusChip label="Pending" variant="pending" />
      <StatusChip label="Draft" variant="draft" />
      <StatusChip label="Published" variant="published" />
      <StatusChip label="Active" variant="active" />
      <StatusChip label="Neutral" variant="neutral" />
      <StatusChip label="Success" variant="success" />
      <StatusChip label="Warning" variant="warning" />
      <StatusChip label="Error" variant="error" />
    </div>
  ),
};
