import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  args: {
    variant: 'text',
    width: 250,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 48,
    height: 48,
  },
};

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 300,
    height: 150,
  },
};

export const CardPlaceholder: Story = {
  render: () => (
    <div className="w-72 space-y-3 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-center space-x-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="space-y-1.5 flex-1">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rounded" width="100%" height={120} />
      <Skeleton variant="text" width="80%" />
    </div>
  ),
};
