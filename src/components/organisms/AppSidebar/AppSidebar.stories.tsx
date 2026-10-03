import type { Meta, StoryObj } from '@storybook/react';
import { Activity, Bell, FileText, LayoutDashboard, Settings } from 'lucide-react';
import React, { useState } from 'react';
import { Badge } from '../../atoms/Badge';
import { AppSidebar } from './AppSidebar';

const meta: Meta<typeof AppSidebar> = {
  title: 'Organisms/AppSidebar',
  component: AppSidebar,
};

export default meta;
type Story = StoryObj<typeof AppSidebar>;

export const Default: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeId, setActiveId] = useState('templates');

    const groups = [
      {
        heading: 'Overview',
        items: [
          {
            id: 'dashboard',
            label: 'Dashboard',
            icon: <LayoutDashboard className="w-4 h-4" />,
            active: activeId === 'dashboard',
            onClick: () => setActiveId('dashboard'),
          },
        ],
      },
      {
        heading: 'Applications',
        items: [
          {
            id: 'templates',
            label: 'Template Manager',
            icon: <FileText className="w-4 h-4" />,
            badge: <Badge size="sm">6</Badge>,
            active: activeId === 'templates',
            onClick: () => setActiveId('templates'),
          },
          {
            id: 'endpoints',
            label: 'Endpoint Collector',
            icon: <Activity className="w-4 h-4" />,
            active: activeId === 'endpoints',
            onClick: () => setActiveId('endpoints'),
          },
          {
            id: 'actions',
            label: 'Action Manager',
            icon: <Bell className="w-4 h-4" />,
            active: activeId === 'actions',
            onClick: () => setActiveId('actions'),
          },
        ],
      },
      {
        heading: 'System',
        items: [
          {
            id: 'settings',
            label: 'Settings',
            icon: <Settings className="w-4 h-4" />,
            active: activeId === 'settings',
            onClick: () => setActiveId('settings'),
          },
        ],
      },
    ];

    return (
      <div className="h-[480px] flex border rounded-card overflow-hidden">
        <AppSidebar
          groups={groups}
          isCollapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
        />
        <div className="flex-1 p-6 bg-slate-50 dark:bg-slate-900 text-sm">
          Active page: <strong>{activeId}</strong>
        </div>
      </div>
    );
  },
};
