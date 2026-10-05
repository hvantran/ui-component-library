import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from './ScrollArea';

const meta: Meta<typeof ScrollArea> = {
  title: 'Molecules/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const items = Array.from({ length: 8 }, (_, i) => `Question item #${i + 1}`);

export const Default: Story = {
  args: {
    hasMore: true,
    isLoading: false,
    children: (
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-200"
          >
            {item}
          </div>
        ))}
      </div>
    ),
  },
};

export const Loading: Story = {
  args: {
    hasMore: true,
    isLoading: true,
    children: (
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-200"
          >
            {item}
          </div>
        ))}
      </div>
    ),
  },
};

export const EndReached: Story = {
  args: {
    hasMore: false,
    endMessage: <span className="text-gray-500">All results loaded</span>,
    children: (
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-800 dark:text-gray-200"
          >
            {item}
          </div>
        ))}
      </div>
    ),
  },
};
