import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from '../../atoms/Button';
import { EmptyState } from './EmptyState';

const meta: Meta<typeof EmptyState> = {
  title: 'Molecules/EmptyState',
  component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {};

export const WithAction: Story = {
  args: {
    title: 'No endpoints found',
    description: 'You have not registered any external endpoints yet.',
    action: <Button variant="primary">Add New Endpoint</Button>,
  },
};
