import type { Meta, StoryObj } from '@storybook/react';
import { Download, RefreshCw, Send } from 'lucide-react';
import React from 'react';
import { FloatingActions } from './FloatingActions';

const meta: Meta<typeof FloatingActions> = {
  title: 'Organisms/FloatingActions',
  component: FloatingActions,
};

export default meta;
type Story = StoryObj<typeof FloatingActions>;

export const Default: Story = {
  render: () => (
    <div className="relative h-96 w-full border border-dashed rounded-card p-4">
      <p className="text-secondary-500 text-sm">
        Click the bottom right button to expand floating actions.
      </p>
      <FloatingActions
        actions={[
          {
            actionName: 'sync',
            actionLabel: 'Trigger Sync',
            actionIcon: <RefreshCw className="w-4 h-4 text-primary-600" />,
            onClick: () => alert('Sync triggered!'),
          },
          {
            actionName: 'export',
            actionLabel: 'Export CSV',
            actionIcon: <Download className="w-4 h-4 text-secondary-600" />,
            onClick: () => alert('Exporting data...'),
          },
          {
            actionName: 'notify',
            actionLabel: 'Send Notification',
            actionIcon: <Send className="w-4 h-4 text-accent-600" />,
            onClick: () => alert('Notification queued'),
          },
        ]}
      />
    </div>
  ),
};
