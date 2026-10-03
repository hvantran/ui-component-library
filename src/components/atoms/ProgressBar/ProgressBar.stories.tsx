import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showPercentage: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 65,
    showPercentage: true,
    label: 'Job Execution Progress',
  },
};

export const Success: Story = {
  args: {
    value: 100,
    variant: 'success',
    showPercentage: true,
    label: 'Sync Completed',
  },
};

export const Warning: Story = {
  args: {
    value: 80,
    variant: 'warning',
    showPercentage: true,
    label: 'Rate Limit Threshold',
  },
};

export const Danger: Story = {
  args: {
    value: 25,
    variant: 'danger',
    showPercentage: true,
    label: 'Retry Budget Remaining',
  },
};
