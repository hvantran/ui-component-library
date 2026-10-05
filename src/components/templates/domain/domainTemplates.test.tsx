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
import {
  ExamIntegrityTeacherDashboardTemplate,
  ExamIntegrityScoringTemplate,
  ExamIntegrityStudentExamTemplate,
  ExamIntegrityStudentLandingTemplate,
} from './exam-integrity';

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

  describe('exam-integrity templates', () => {
    it('renders ExamIntegrityTeacherDashboardTemplate', () => {
      const html = renderToString(
        <ExamIntegrityTeacherDashboardTemplate sidebar={<div>Sidebar</div>}>
          <div>Main Dashboard Content</div>
        </ExamIntegrityTeacherDashboardTemplate>,
      );
      expect(html).toContain('Sidebar');
      expect(html).toContain('Main Dashboard Content');
    });

    it('renders ExamIntegrityScoringTemplate', () => {
      const html = renderToString(
        <ExamIntegrityScoringTemplate
          queueSlot={<div>Submission Queue</div>}
          detailSlot={<div>Grading Detail</div>}
        />,
      );
      expect(html).toContain('Essay Scoring');
      expect(html).toContain('Submission Queue');
      expect(html).toContain('Grading Detail');
    });

    it('renders ExamIntegrityStudentExamTemplate', () => {
      const html = renderToString(
        <ExamIntegrityStudentExamTemplate
          headerSlot={<div>Exam Header</div>}
          contentSlot={<div>Question Content</div>}
        />,
      );
      expect(html).toContain('Exam Header');
      expect(html).toContain('Question Content');
    });

    it('renders ExamIntegrityStudentLandingTemplate', () => {
      const html = renderToString(
        <ExamIntegrityStudentLandingTemplate>
          <div>Exam Cards Grid</div>
        </ExamIntegrityStudentLandingTemplate>,
      );
      expect(html).toContain('My Assigned Exams');
      expect(html).toContain('Exam Cards Grid');
    });
  });
});
