import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AppSwitcher, DEFAULT_PLATFORM_APPS } from './AppSwitcher';

const meta: Meta<typeof AppSwitcher> = {
  title: 'Organisms/AppSwitcher',
  component: AppSwitcher,
};

export default meta;
type Story = StoryObj<typeof AppSwitcher>;

export const Default: Story = {
  render: () => {
    return (
      <div className="p-8 bg-slate-50 min-h-[300px] flex items-start justify-end">
        <AppSwitcher currentAppId="template-manager" />
      </div>
    );
  },
};

export const DarkMode: Story = {
  render: () => {
    return (
      <div className="dark p-8 bg-slate-900 min-h-[300px] flex items-start justify-end">
        <AppSwitcher currentAppId="exam-integrity" />
      </div>
    );
  },
};

export const CustomApplications: Story = {
  render: () => {
    const customApps = [
      ...DEFAULT_PLATFORM_APPS,
      {
        id: 'analytics-dashboard',
        name: 'Analytics',
        url: '/analytics',
      },
    ];

    return (
      <div className="p-8 bg-slate-50 min-h-[300px] flex items-start justify-end">
        <AppSwitcher
          items={customApps}
          currentAppId="action-manager"
          onNavigate={(app) => alert(`Navigating to: ${app.name} (${app.url})`)}
        />
      </div>
    );
  },
};
