import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    interactive: { control: 'boolean' },
    selected: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-1">Standard Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is a default card with subtle shadow and border.
        </p>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-1">Outlined Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Outlined card without shadow.
        </p>
      </div>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'lg',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-1">Elevated Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Card with prominent shadow and hover elevation.
        </p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    variant: 'default',
    interactive: true,
    padding: 'md',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-1">Interactive Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Hover over me to see the elevated shadow and blue border transition.
        </p>
      </div>
    ),
  },
};

export const Selected: Story = {
  args: {
    variant: 'default',
    selected: true,
    padding: 'md',
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-1">Selected Card</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Indicates an active or checked state.
        </p>
      </div>
    ),
  },
};
