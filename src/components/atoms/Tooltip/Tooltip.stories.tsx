import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'Helpful information',
    position: 'top',
    children: <Button size="sm">Hover or Focus Me</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex items-center gap-6 p-12">
      <Tooltip content="Tooltip on Top" position="top">
        <Button size="sm" variant="outlined">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Bottom" position="bottom">
        <Button size="sm" variant="outlined">Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Left" position="left">
        <Button size="sm" variant="outlined">Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Right" position="right">
        <Button size="sm" variant="outlined">Right</Button>
      </Tooltip>
    </div>
  ),
};
