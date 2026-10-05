import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TemplateSummaryTemplate } from './TemplateSummaryTemplate';

const meta: Meta<typeof TemplateSummaryTemplate> = {
  title: 'Templates/TemplateSummaryTemplate',
  component: TemplateSummaryTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof TemplateSummaryTemplate>;

export const Default: Story = {
  render: () => (
    <TemplateSummaryTemplate
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Templates' }]}
      tableProps={{
        name: 'Templates',
        columns: [
          { id: 'templateName', label: 'Template Name', isSortable: true },
          { id: 'description', label: 'Description' },
          { id: 'updatedAt', label: 'Last Updated', isSortable: true },
        ],
        keyColumn: 'templateName',
        pagingResult: {
          totalElements: 2,
          content: [
            { templateName: 'Lazada Poller', description: 'Price monitoring template', updatedAt: '2026-10-01' },
            { templateName: 'Hasaki Poller', description: 'Product sync poller', updatedAt: '2026-10-03' },
          ],
        },
        pagingOptions: {
          pageIndex: 0,
          pageSize: 10,
          orderBy: '-updatedAt',
          searchText: '',
          rowsPerPageOptions: [10, 20, 50],
          onPageChange: () => {},
        },
      }}
    />
  ),
};
