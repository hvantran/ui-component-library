import type { Meta, StoryObj } from '@storybook/react';
import { AppFooter } from './AppFooter';

const meta: Meta<typeof AppFooter> = {
  title: 'Organisms/AppFooter',
  component: AppFooter,
  args: {
    appName: 'Project Management Suite',
    version: '0.1.0',
    statusText: 'All systems online',
    isOnline: true,
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof AppFooter>;

export const Default: Story = {};

export const SystemDegraded: Story = {
  args: {
    statusText: 'Degraded performance (Kafka notifier lag)',
    isOnline: false,
  },
};
