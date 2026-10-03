import { describe, expect, it } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Pagination } from './Pagination';

describe('Pagination molecule', () => {
  it('renders pagination with navigation and page numbers', () => {
    const html = renderToString(
      <Pagination
        pageIndex={0}
        pageSize={10}
        totalElements={45}
        onPageChange={() => {}}
      />
    );
    expect(html).toContain('role="navigation"');
    expect(html).toContain('Showing');
    expect(html).toContain('45');
    expect(html).toContain('aria-label="First page"');
    expect(html).toContain('aria-label="Next page"');
  });

  it('renders rows per page selector when onPageSizeChange is provided', () => {
    const html = renderToString(
      <Pagination
        pageIndex={1}
        pageSize={25}
        totalElements={100}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
      />
    );
    expect(html).toContain('Rows per page:');
    expect(html).toContain('value="25"');
    expect(html).toContain('aria-label="Rows per page"');
  });
});
