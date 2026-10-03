import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  args: {
    totalElements: 125,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    return (
      <div className="p-4 border rounded-card">
        <div className="p-8 text-center text-secondary-500">
          Showing content for page {page + 1}
        </div>
        <Pagination
          {...args}
          pageIndex={page}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    );
  },
};
