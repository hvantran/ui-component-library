import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  TemplateSummaryTemplate,
  TemplateDetailTemplate,
  TemplateCreationTemplate,
} from './template-manager';
import {
  ExtEndpointSummaryTemplate,
  ExtEndpointDetailsTemplate,
} from './endpoint-collector';
import {
  ActionSummaryTemplate,
  ActionDetailTemplate,
} from './action-manager';

describe('Domain Page Templates with App Prefix', () => {
  const sampleTableProps = {
    name: 'Sample Table',
    columns: [{ id: 'name', label: 'Name' }],
    keyColumn: 'name',
    pagingResult: { totalElements: 0, content: [] },
    pagingOptions: {
      pageIndex: 0,
      pageSize: 10,
      orderBy: 'name',
      searchText: '',
      onPageChange: vi.fn(),
    },
  };

  describe('template-manager templates', () => {
    it('renders TemplateSummaryTemplate', () => {
      const html = renderToString(
        <TemplateSummaryTemplate tableProps={sampleTableProps} />,
      );
      expect(html).toContain('Template Summary');
    });

    it('renders TemplateDetailTemplate', () => {
      const html = renderToString(
        <TemplateDetailTemplate
          properties={[]}
          onPropertyChange={() => {}}
        />,
      );
      expect(html).toContain('Template Details');
    });

    it('renders TemplateCreationTemplate', () => {
      const html = renderToString(
        <TemplateCreationTemplate
          steps={[{ name: 'step1', label: 'Step 1', properties: [] }]}
          activeStep={0}
          onStepChange={() => {}}
          onPropertyChange={() => {}}
          onFinish={() => {}}
        />,
      );
      expect(html).toContain('Create Template');
    });
  });

  describe('endpoint-collector templates', () => {
    it('renders ExtEndpointSummaryTemplate', () => {
      const html = renderToString(
        <ExtEndpointSummaryTemplate tableProps={sampleTableProps} />,
      );
      expect(html).toContain('External Endpoints');
    });

    it('renders ExtEndpointDetailsTemplate', () => {
      const html = renderToString(
        <ExtEndpointDetailsTemplate
          properties={[]}
          onPropertyChange={() => {}}
        />,
      );
      expect(html).toContain('Endpoint Details');
    });
  });

  describe('action-manager templates', () => {
    it('renders ActionSummaryTemplate in list mode', () => {
      const html = renderToString(
        <ActionSummaryTemplate
          defaultViewMode="list"
          tableProps={sampleTableProps}
        />,
      );
      expect(html).toContain('Action Summary');
    });

    it('renders ActionDetailTemplate', () => {
      const html = renderToString(
        <ActionDetailTemplate
          properties={[]}
          onPropertyChange={() => {}}
        />,
      );
      expect(html).toContain('Action Details');
    });
  });
});

