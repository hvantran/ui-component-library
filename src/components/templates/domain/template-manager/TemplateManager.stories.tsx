import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TemplateSummaryTemplate } from './TemplateSummaryTemplate';
import { TemplateDetailTemplate } from './TemplateDetailTemplate';
import { TemplateCreationTemplate } from './TemplateCreationTemplate';
import { PropType } from '../../../../types/metadata';

const meta: Meta = {
  title: 'Templates/TemplateManager',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Summary: StoryObj<typeof TemplateSummaryTemplate> = {
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
        data: [
          { templateName: 'Lazada Poller', description: 'Price monitoring template', updatedAt: '2026-10-01' },
          { templateName: 'Hasaki Poller', description: 'Product sync poller', updatedAt: '2026-10-03' },
        ],
        totalElements: 2,
        pageIndex: 0,
        pageSize: 10,
        orderBy: '-updatedAt',
        onPageChange: () => {},
      }}
    />
  ),
};

export const Detail: StoryObj<typeof TemplateDetailTemplate> = {
  render: () => (
    <TemplateDetailTemplate
      breadcrumbs={[{ label: 'Templates', href: '#' }, { label: 'Lazada Poller' }]}
      properties={[
        { propName: 'name', propValue: 'Lazada Poller', propType: PropType.InputText, propLabel: 'Template Name' },
        { propName: 'description', propValue: 'Poller for cosmetics', propType: PropType.Textarea, propLabel: 'Description' },
      ]}
      onPropertyChange={() => {}}
    />
  ),
};

export const Creation: StoryObj<typeof TemplateCreationTemplate> = {
  render: () => (
    <TemplateCreationTemplate
      breadcrumbs={[{ label: 'Templates', href: '#' }, { label: 'New' }]}
      steps={[
        {
          name: 'general',
          label: 'General Info',
          properties: [
            { propName: 'name', propValue: '', propType: PropType.InputText, propLabel: 'Name' },
          ],
        },
      ]}
      activeStep={0}
      onStepChange={() => {}}
      onPropertyChange={() => {}}
      onFinish={() => {}}
    />
  ),
};
