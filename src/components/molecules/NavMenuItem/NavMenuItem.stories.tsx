import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  LayoutDashboard,
  Upload,
  ClipboardList,
  Database,
  BarChart2,
  Settings,
} from 'lucide-react';
import { NavMenuItem } from './NavMenuItem';

const meta: Meta<typeof NavMenuItem> = {
  title: 'Molecules/NavMenuItem',
  component: NavMenuItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof NavMenuItem>;

export const Default: Story = {
  args: {
    icon: <LayoutDashboard size={18} />,
    label: 'Dashboard',
    active: false,
  },
};

export const Active: Story = {
  args: {
    icon: <LayoutDashboard size={18} />,
    label: 'Dashboard',
    active: true,
  },
};

export const Collapsed: Story = {
  args: {
    icon: <LayoutDashboard size={18} />,
    label: 'Dashboard',
    collapsed: true,
  },
};

export const FullSidebar: Story = {
  render: () => (
    <div className="w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-2 flex flex-col gap-1">
      <NavMenuItem icon={<LayoutDashboard size={18} />} label="Overview" active />
      <NavMenuItem icon={<Upload size={18} />} label="Upload Exam" />
      <NavMenuItem icon={<ClipboardList size={18} />} label="Review Submissions" />
      <NavMenuItem icon={<Database size={18} />} label="Question Bank" />
      <NavMenuItem icon={<BarChart2 size={18} />} label="Reports" />
      <NavMenuItem icon={<Settings size={18} />} label="Settings" />
    </div>
  ),
};
