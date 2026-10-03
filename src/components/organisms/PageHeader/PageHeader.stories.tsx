import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';
import React from 'react';
import { PageHeader } from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'Organisms/PageHeader',
  component: PageHeader,
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: 'Workflows & Actions',
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Workflows', href: '/workflows' },
      { label: 'Action Manager' },
    ],
    actions: [
      {
        actionName: 'create',
        actionLabel: 'New Action',
        actionIcon: <Plus className="w-4 h-4" />,
        onClick: () => alert('Create clicked'),
      },
    ],
  },
};
