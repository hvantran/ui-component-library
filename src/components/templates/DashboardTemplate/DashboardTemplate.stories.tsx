import type { Meta, StoryObj } from '@storybook/react';
import { Activity, Bell, FileText, LayoutDashboard } from 'lucide-react';
import React, { useState } from 'react';
import { AppFooter } from '../../organisms/AppFooter';
import { AppSidebar } from '../../organisms/AppSidebar';
import { AppTopBar } from '../../organisms/AppTopBar';
import { DashboardTemplate } from './DashboardTemplate';

const meta: Meta<typeof DashboardTemplate> = {
  title: 'Templates/DashboardTemplate',
  component: DashboardTemplate,
};

export default meta;
type Story = StoryObj<typeof DashboardTemplate>;

export const Default: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState('templates');

    return (
      <DashboardTemplate
        topBar={
          <AppTopBar
            title="Monorepo Console"
            onMenuToggle={() => setCollapsed(!collapsed)}
          />
        }
        sidebar={
          <AppSidebar
            isCollapsed={collapsed}
            onToggleCollapse={() => setCollapsed(!collapsed)}
            groups={[
              {
                heading: 'Navigation',
                items: [
                  {
                    id: 'overview',
                    label: 'Overview',
                    icon: <LayoutDashboard className="w-4 h-4" />,
                    active: active === 'overview',
                    onClick: () => setActive('overview'),
                  },
                  {
                    id: 'templates',
                    label: 'Templates',
                    icon: <FileText className="w-4 h-4" />,
                    active: active === 'templates',
                    onClick: () => setActive('templates'),
                  },
                  {
                    id: 'endpoints',
                    label: 'Endpoints',
                    icon: <Activity className="w-4 h-4" />,
                    active: active === 'endpoints',
                    onClick: () => setActive('endpoints'),
                  },
                  {
                    id: 'actions',
                    label: 'Actions',
                    icon: <Bell className="w-4 h-4" />,
                    active: active === 'actions',
                    onClick: () => setActive('actions'),
                  },
                ],
              },
            ]}
          />
        }
        footer={<AppFooter appName="Project Management Console" />}
      >
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-secondary-900 dark:text-white">
            Welcome to the Microservices Workspace
          </h2>
          <p className="text-secondary-600 dark:text-secondary-300 text-sm">
            This dashboard shell integrates AppTopBar, AppSidebar, content area, and AppFooter.
          </p>
        </div>
      </DashboardTemplate>
    );
  },
};
