import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Actions', href: '/actions' },
      { label: 'Sync Lazada Inventory', active: true },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    separator: '>',
    items: [
      { label: 'Workspaces', href: '#' },
      { label: 'Action Manager', href: '#' },
      { label: 'Settings', active: true },
    ],
  },
};
