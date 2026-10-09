import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  ExamIntegrityTeacherDashboardTemplate,
  ExamIntegrityScoringTemplate,
  ExamIntegrityStudentExamTemplate,
  ExamIntegrityStudentLandingTemplate,
  ExamIntegrityStudentExamContentTemplate,
  ExamIntegrityStudentExamFooterTemplate,
  ExamIntegrityStudentReviewTemplate,
  ExamIntegrityTeacherQuestionReviewTemplate,
  ExamIntegrityTeacherQuestionBankTemplate,
  ExamIntegrityTeacherProctorTemplate,
  ExamIntegrityTeacherDraftsTemplate,
  ExamIntegrityTeacherReportsTemplate,
  ExamIntegrityTeacherIngestionTemplate,
  ExamIntegrityTeacherFinalPublicationTemplate,
} from './index';

describe('Exam Integrity Templates', () => {
  it('renders ExamIntegrityTeacherDashboardTemplate', () => {
    const html = renderToString(
      <ExamIntegrityTeacherDashboardTemplate sidebar={<div>Sidebar</div>}>
        <div>Main Dashboard Content</div>
      </ExamIntegrityTeacherDashboardTemplate>,
    );
    expect(html).toContain('Sidebar');
    expect(html).toContain('Main Dashboard Content');
  });

  it('renders ExamIntegrityTeacherDashboardTemplate with header slots and sync dialog', () => {
    const html = renderToString(
      <ExamIntegrityTeacherDashboardTemplate
        headerTitle="Dashboard"
        headerSubtitle="Manage all active and draft exams"
        headerActionsSlot={<button type="button">Custom Action</button>}
        filtersSlot={<div>Filter Controls</div>}
        syncDialogState={{
          examId: 'exam-123',
          examTitle: 'Math Finals',
          linkedQuestionCount: 20,
        }}
        isSyncingQuestions={false}
        onConfirmSync={() => {}}
        onCancelSync={() => {}}
      >
        <div>Exam Grid</div>
      </ExamIntegrityTeacherDashboardTemplate>,
    );
    expect(html).toContain('Dashboard');
    expect(html).toContain('Manage all active and draft exams');
    expect(html).toContain('Custom Action');
    expect(html).toContain('Filter Controls');
    expect(html).toContain('Sync Questions from Bank');
    expect(html).toContain('Math Finals');
    expect(html).toContain('Linked questions eligible for sync:');
    expect(html).toContain('20');
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
      <ExamIntegrityStudentLandingTemplate starCount={95} studentName="Alice">
        <div>Exam Cards Grid</div>
      </ExamIntegrityStudentLandingTemplate>,
    );
    expect(html).toContain('My Assigned Exams');
    expect(html).toContain('Exam Cards Grid');
    expect(html).toContain('95');
    expect(html).toContain('student-star-badge');
  });

  it('renders ExamIntegrityStudentExamContentTemplate', () => {
    const html = renderToString(
      <ExamIntegrityStudentExamContentTemplate proTips={['Focus on accuracy']}>
        <div>Main Content Area</div>
      </ExamIntegrityStudentExamContentTemplate>,
    );
    expect(html).toContain('Main Content Area');
    expect(html).toContain('Focus on accuracy');
  });

  it('renders ExamIntegrityStudentExamFooterTemplate', () => {
    const html = renderToString(
      <ExamIntegrityStudentExamFooterTemplate>
        <div>Footer Actions</div>
      </ExamIntegrityStudentExamFooterTemplate>,
    );
    expect(html).toContain('Footer Actions');
  });

  it('renders ExamIntegrityStudentReviewTemplate', () => {
    const html = renderToString(
      <ExamIntegrityStudentReviewTemplate studentName="Alice" starCount={95}>
        <div>Student Review Body</div>
      </ExamIntegrityStudentReviewTemplate>,
    );
    expect(html).toContain('Alice');
    expect(html).toContain('Student Review Body');
    expect(html).toContain('95');
    expect(html).toContain('star-counter-badge');
  });

  it('renders ExamIntegrityTeacherQuestionReviewTemplate', () => {
    const html = renderToString(
      <ExamIntegrityTeacherQuestionReviewTemplate
        examName="Calculus I"
        questionNumber={2}
        totalQuestions={10}
      />,
    );
    expect(html).toContain('Calculus I');
    expect(html).toMatch(/Question\s*(<!-- -->)?\s*2\s*(<!-- -->)?\s*of\s*(<!-- -->)?\s*10/);
  });

  it('renders ExamIntegrityTeacherQuestionBankTemplate', () => {
    const html = renderToString(
      <ExamIntegrityTeacherQuestionBankTemplate>
        <div>Question Bank Items</div>
      </ExamIntegrityTeacherQuestionBankTemplate>,
    );
    expect(html).toContain('Question Bank');
    expect(html).toContain('Question Bank Items');
  });

  it('renders ExamIntegrityTeacherProctorTemplate', () => {
    const html = renderToString(
      <ExamIntegrityTeacherProctorTemplate brandName="TestProctor">
        <div>Proctor Grid</div>
      </ExamIntegrityTeacherProctorTemplate>,
    );
    expect(html).toContain('TestProctor');
    expect(html).toContain('Proctor Grid');
  });

  it('renders ExamIntegrityTeacherDraftsTemplate', () => {
    const html = renderToString(
      <ExamIntegrityTeacherDraftsTemplate>
        <div>Draft Exams List</div>
      </ExamIntegrityTeacherDraftsTemplate>,
    );
    expect(html).toContain('Draft Exams List');
  });

  it('renders ExamIntegrityTeacherReportsTemplate', () => {
    const html = renderToString(
      <ExamIntegrityTeacherReportsTemplate>
        <div>Reports Dashboard</div>
      </ExamIntegrityTeacherReportsTemplate>,
    );
    expect(html).toContain('Reports Dashboard');
  });

  it('renders ExamIntegrityTeacherIngestionTemplate', () => {
    const html = renderToString(
      <ExamIntegrityTeacherIngestionTemplate>
        <div>Ingested PDF Cards</div>
      </ExamIntegrityTeacherIngestionTemplate>,
    );
    expect(html).toContain('Exam Ingestion');
    expect(html).toContain('Ingested PDF Cards');
  });

  it('renders ExamIntegrityTeacherFinalPublicationTemplate', () => {
    const html = renderToString(
      <ExamIntegrityTeacherFinalPublicationTemplate
        stats={{ approvedQuestions: 15 }}
      />,
    );
    expect(html).toContain('Exam Publication Readiness');
    expect(html).toContain('Approved Questions');
  });
});

