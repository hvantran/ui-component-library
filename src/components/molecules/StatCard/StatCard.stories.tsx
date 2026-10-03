import type { Meta, StoryObj } from '@storybook/react';
import { Activity, CheckCircle, Clock, Zap } from 'lucide-react';
import React from 'react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Molecules/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    title: 'Total Templates',
    value: '2,845',
    change: { value: '+8.4%', isPositive: true },
    description: 'Active templates in system',
    icon: <Activity className="w-5 h-5" />,
  },
};

export const MetricsRow: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
      <StatCard
        title="Completed Tasks"
        value="14,290"
        change={{ value: '+15.2%', isPositive: true }}
        icon={<CheckCircle className="w-5 h-5 text-green-500" />}
        footer="Updated 5m ago"
      />
      <StatCard
        title="Avg. Latency"
        value="142ms"
        change={{ value: '-3.8%', isPositive: true }}
        icon={<Zap className="w-5 h-5 text-blue-500" />}
        footer="Across 12 endpoints"
      />
      <StatCard
        title="Pending Retries"
        value="18"
        change={{ value: '+4.1%', isPositive: false }}
        icon={<Clock className="w-5 h-5 text-amber-500" />}
        footer="Requires attention"
      />
    </div>
  ),
};
