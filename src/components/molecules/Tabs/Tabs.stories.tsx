import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Badge } from '../../atoms/Badge';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('summary');
    return (
      <div className="p-4">
        <Tabs
          activeTab={active}
          onChange={setActive}
          tabs={[
            { id: 'summary', label: 'Summary' },
            { id: 'tasks', label: 'Tasks', badge: <Badge size="sm">5</Badge> },
            { id: 'logs', label: 'Execution Logs' },
            { id: 'settings', label: 'Settings', disabled: true },
          ]}
        />
        <div className="p-6 text-sm text-secondary-600 dark:text-secondary-300">
          Showing tab content for: <strong>{active}</strong>
        </div>
      </div>
    );
  },
};
