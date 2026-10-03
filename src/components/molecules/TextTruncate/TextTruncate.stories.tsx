import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextTruncate } from './TextTruncate';

const meta: Meta<typeof TextTruncate> = {
  title: 'Molecules/TextTruncate',
  component: TextTruncate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxLength: { control: 'number' },
    tooltipVisible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextTruncate>;

export const Default: Story = {
  args: {
    text: 'A very long identifier or commit SHA that needs to be truncated for UI presentation',
    maxLength: 24,
  },
};

export const ShortText: Story = {
  args: {
    text: 'Short string',
    maxLength: 24,
  },
};

export const WithoutTooltip: Story = {
  args: {
    text: 'A long string without tooltip display on hover',
    maxLength: 20,
    tooltipVisible: false,
  },
};
