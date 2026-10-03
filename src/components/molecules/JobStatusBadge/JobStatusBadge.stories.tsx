import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { JobStatusBadge } from './JobStatusBadge';

const meta: Meta<typeof JobStatusBadge> = {
  title: 'Molecules/JobStatusBadge',
  component: JobStatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof JobStatusBadge>;

export const Default: Story = {
  args: {
    status: 'SUCCESS',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <JobStatusBadge status="SUCCESS" />
      <JobStatusBadge status="RUNNING" />
      <JobStatusBadge status="PROCESSING" />
      <JobStatusBadge status="PENDING" />
      <JobStatusBadge status="FAILED" />
      <JobStatusBadge status="FAILURE" />
      <JobStatusBadge status="CANCELLED" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <JobStatusBadge status="RUNNING" size="sm" />
      <JobStatusBadge status="RUNNING" size="md" />
      <JobStatusBadge status="RUNNING" size="lg" />
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <JobStatusBadge status="SUCCESS" showLabel={false} />
      <JobStatusBadge status="RUNNING" showLabel={false} />
      <JobStatusBadge status="PENDING" showLabel={false} />
      <JobStatusBadge status="FAILED" showLabel={false} />
      <JobStatusBadge status="CANCELLED" showLabel={false} />
    </div>
  ),
};
