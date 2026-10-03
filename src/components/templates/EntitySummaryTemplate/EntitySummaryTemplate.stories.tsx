import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import { Badge } from '../../atoms/Badge';
import { EntitySummaryTemplate } from './EntitySummaryTemplate';

const meta: Meta<typeof EntitySummaryTemplate> = {
  title: 'Templates/EntitySummaryTemplate',
  component: EntitySummaryTemplate,
};

export default meta;
type Story = StoryObj<typeof EntitySummaryTemplate>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(0);
    const [activeTab, setActiveTab] = useState('all');

    return (
      <EntitySummaryTemplate
        pageTitle="External Endpoints"
        breadcrumbs={[
          { label: 'Dashboard', href: '/' },
          { label: 'Endpoint Collector', href: '/collector' },
          { label: 'Endpoints' },
        ]}
        headerActions={[
          {
            actionName: 'new-endpoint',
            actionLabel: 'New Endpoint',
            actionIcon: <Plus className="w-4 h-4" />,
            onClick: () => alert('New endpoint clicked'),
          },
        ]}
        tabs={[
          { name: 'all', label: 'All Endpoints' },
          { name: 'active', label: 'Active (2)' },
          { name: 'disabled', label: 'Disabled (1)' },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tableProps={{
          name: 'Registered API Endpoints',
          keyColumn: 'id',
          visibleSearchbar: true,
          columns: [
            { id: 'id', label: 'ID', isKeyColumn: true },
            { id: 'name', label: 'Endpoint Name', isSortable: true },
            { id: 'url', label: 'URL' },
            {
              id: 'status',
              label: 'Status',
              format: (val: string) => (
                <Badge variant={val === 'ONLINE' ? 'success' : 'neutral'}>{val}</Badge>
              ),
            },
          ],
          pagingResult: {
            totalElements: 2,
            content: [
              { id: 'EP-1', name: 'Lazada Stock', url: 'https://api.lazada.vn/stock', status: 'ONLINE' },
              { id: 'EP-2', name: 'Hasaki Price', url: 'https://api.hasaki.vn/price', status: 'ONLINE' },
            ],
          },
          pagingOptions: {
            pageIndex: page,
            pageSize: 10,
            orderBy: 'name',
            rowsPerPageOptions: [10, 20],
            onPageChange: (newPage) => setPage(newPage),
          },
        }}
        floatingActions={[
          {
            actionName: 'refresh',
            actionLabel: 'Refresh Endpoints',
            actionIcon: <Plus className="w-4 h-4" />,
            onClick: () => alert('Refreshed'),
          },
        ]}
      />
    );
  },
};
