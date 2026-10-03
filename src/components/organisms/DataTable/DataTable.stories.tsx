import type { Meta, StoryObj } from '@storybook/react';
import { Eye, Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { Badge } from '../../atoms/Badge';
import { DataTable } from './DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

const sampleData = [
  { id: 'ACT-001', name: 'Lazada Poller', type: 'HTTP_POLL', status: 'ACTIVE', items: 120 },
  { id: 'ACT-002', name: 'Hasaki Poller', type: 'HTTP_POLL', status: 'ACTIVE', items: 85 },
  { id: 'ACT-003', name: 'Email Digest', type: 'BATCH_JOB', status: 'PAUSED', items: 0 },
  { id: 'ACT-004', name: 'Cleanup Old Logs', type: 'MAINTENANCE', status: 'COMPLETED', items: 450 },
];

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [orderBy, setOrderBy] = useState('name');
    const [search, setSearch] = useState('');

    const filtered = sampleData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    const columns = [
      { id: 'id', label: 'ID', isKeyColumn: true, minWidth: '100px' },
      { id: 'name', label: 'Action Name', isSortable: true },
      { id: 'type', label: 'Type' },
      {
        id: 'status',
        label: 'Status',
        format: (val: string) => {
          const variant = val === 'ACTIVE' ? 'success' : val === 'PAUSED' ? 'warning' : 'neutral';
          return <Badge variant={variant}>{val}</Badge>;
        },
      },
      { id: 'items', label: 'Processed', align: 'right' as const },
      {
        id: 'actions',
        label: 'Actions',
        align: 'center' as const,
        actions: [
          {
            actionName: 'view',
            actionLabel: 'View details',
            actionIcon: <Eye className="w-3.5 h-3.5" />,
            onClick: (row) => () => alert(`Viewing ${row.name}`),
          },
          {
            actionName: 'delete',
            actionLabel: 'Delete action',
            actionIcon: <Trash2 className="w-3.5 h-3.5 text-error-500" />,
            onClick: (row) => () => alert(`Deleting ${row.name}`),
          },
        ],
      },
    ];

    return (
      <div className="p-6">
        <DataTable
          name="Action Workflows"
          columns={columns}
          keyColumn="id"
          visibleSearchbar
          searchPlaceholder="Search actions..."
          pagingResult={{
            totalElements: filtered.length,
            content: filtered,
          }}
          pagingOptions={{
            pageIndex: page,
            pageSize: pageSize,
            orderBy: orderBy,
            searchText: search,
            onPageChange: (newPage, newPageSize, newOrder, newSearch) => {
              setPage(newPage);
              setPageSize(newPageSize);
              setOrderBy(newOrder);
              setSearch(newSearch);
            },
          }}
        />
      </div>
    );
  },
};

export const LoadingState: Story = {
  render: () => (
    <div className="p-6">
      <DataTable
        name="Loading Data"
        loading
        columns={[
          { id: 'id', label: 'ID', isKeyColumn: true },
          { id: 'title', label: 'Title' },
        ]}
        keyColumn="id"
        pagingResult={{ totalElements: 0, content: [] }}
        pagingOptions={{
          pageIndex: 0,
          pageSize: 5,
          orderBy: 'id',
          onPageChange: () => {},
        }}
      />
    </div>
  ),
};
