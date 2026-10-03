import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-64">
      <p className="text-sm">Content Above</p>
      <Divider />
      <p className="text-sm">Content Below</p>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-64">
      <Divider label="OR" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center h-8 gap-4 text-sm">
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};
