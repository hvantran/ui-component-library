import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  args: {
    placeholder: 'Filter items...',
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  render: (args) => {
    const [query, setQuery] = useState('');
    return (
      <div className="p-4 max-w-md">
        <SearchBar {...args} value={query} onChange={setQuery} />
        <p className="mt-2 text-xs text-secondary-500">Current query: {query || '(empty)'}</p>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled search query',
  },
};
