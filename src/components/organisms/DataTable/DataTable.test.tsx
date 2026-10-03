import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { DataTable } from './DataTable';

describe('DataTable organism', () => {
  const columns = [
    { id: 'id', label: 'ID', isKeyColumn: true },
    { id: 'name', label: 'Action Name', isSortable: true },
    { id: 'status', label: 'Status' },
  ];

  const pagingResult = {
    totalElements: 2,
    content: [
      { id: '1', name: 'Sync Users', status: 'SUCCESS' },
      { id: '2', name: 'Export Data', status: 'PENDING' },
    ],
  };

  const pagingOptions = {
    pageSize: 10,
    pageIndex: 0,
    orderBy: 'name',
    rowsPerPageOptions: [10, 20],
    onPageChange: vi.fn(),
  };

  it('renders table headers and data rows correctly', () => {
    const html = renderToString(
      <DataTable
        name="Action Monitor"
        columns={columns}
        keyColumn="id"
        pagingOptions={pagingOptions}
        pagingResult={pagingResult}
      />
    );
    expect(html).toContain('Action Monitor');
    expect(html).toContain('Action Name');
    expect(html).toContain('Sync Users');
    expect(html).toContain('Export Data');
    expect(html).toContain('role="region"');
  });

  it('renders empty state when content is empty', () => {
    const html = renderToString(
      <DataTable
        name="Empty Table"
        columns={columns}
        keyColumn="id"
        pagingOptions={pagingOptions}
        pagingResult={{ totalElements: 0, content: [] }}
      />
    );
    expect(html).toContain('No records found');
  });
});
