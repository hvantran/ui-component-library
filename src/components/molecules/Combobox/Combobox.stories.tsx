import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Combobox } from './Combobox';

const meta: Meta<typeof Combobox> = {
  title: 'Molecules/Combobox',
  component: Combobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const sampleOptions = [
  { value: 'react', label: 'React.js' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid.js' },
  { value: 'qwik', label: 'Qwik', disabled: true },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="w-72">
        <Combobox
          options={sampleOptions}
          value={value}
          onChange={setValue}
          placeholder="Select framework..."
        />
      </div>
    );
  },
};

export const Preselected: Story = {
  render: () => {
    const [value, setValue] = useState('react');
    return (
      <div className="w-72">
        <Combobox
          options={sampleOptions}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};
