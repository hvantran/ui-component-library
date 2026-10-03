import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { EntitySummaryTemplate } from './EntitySummaryTemplate';

describe('EntitySummaryTemplate template', () => {
  const tableProps = {
    name: 'Workflows',
    columns: [{ id: 'id', label: 'ID', isKeyColumn: true }],
    pagingOptions: {
      pageSize: 10,
      pageIndex: 0,
      orderBy: 'id',
      rowsPerPageOptions: [10],
      onPageChange: vi.fn(),
    },
    pagingResult: { totalElements: 1, content: [{ id: 'WF-1' }] },
    keyColumn: 'id',
  };

  it('renders page layout with main role, page title, and data table', () => {
    const html = renderToString(
      <EntitySummaryTemplate
        pageTitle="Action Manager Overview"
        tableProps={tableProps}
      />
    );
    expect(html).toContain('role="main"');
    expect(html).toContain('Action Manager Overview');
    expect(html).toContain('Workflows');
    expect(html).toContain('WF-1');
  });
});
