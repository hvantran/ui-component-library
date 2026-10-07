import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import {
  ExamIntegrityTeacherDashboardSidebar,
  ExamIntegrityStudentPortalSidebar,
  ExamIntegrityStudentExamHeader,
  ExamIntegrityStudentExamNavigationBar,
  ExamIntegrityStudentFlaggedSidebar,
  ExamIntegrityStudentProTips,
  ExamIntegrityStudentQuestionPanelHeader,
  ExamIntegrityStudentSubmitModal,
  ExamIntegrityStudentGradeSwitcher,
  ExamIntegrityTopBar,
  ExamIntegrityReviewDashboard,
} from './index';

describe('ExamIntegrity Organisms', () => {
  it('renders ExamIntegrityTeacherDashboardSidebar', () => {
    const html = renderToString(<ExamIntegrityTeacherDashboardSidebar activeSection="dashboard" />);
    expect(html).toContain('Teacher Portal');
    expect(html).toContain('Dashboard');
  });

  it('renders ExamIntegrityStudentPortalSidebar', () => {
    const html = renderToString(
      <ExamIntegrityStudentPortalSidebar studentName="John Doe" activeSection="dashboard" />
    );
    expect(html).toContain('John Doe');
    expect(html).toContain('My Exams');
  });

  it('renders ExamIntegrityStudentExamHeader', () => {
    const html = renderToString(
      <ExamIntegrityStudentExamHeader
        currentQuestion={1}
        totalQuestions={10}
        remainingSeconds={600}
      />
    );
    expect(html).toMatch(/Question\s*(<!-- -->)?\s*1\s*(<!-- -->)?\s*\/\s*(<!-- -->)?\s*10/);
    expect(html).toContain('Proctoring Active');
  });

  it('renders ExamIntegrityStudentExamNavigationBar', () => {
    const html = renderToString(
      <ExamIntegrityStudentExamNavigationBar
        canGoPrev={true}
        canGoNext={true}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
        onSubmit={vi.fn()}
      />
    );
    expect(html).toContain('Previous');
    expect(html).toContain('Next');
  });

  it('renders ExamIntegrityStudentFlaggedSidebar', () => {
    const html = renderToString(
      <ExamIntegrityStudentFlaggedSidebar
        flaggedMap={{ 1: true, 2: false }}
        totalQuestions={2}
        currentQuestion={1}
        onJumpTo={vi.fn()}
      />
    );
    expect(html).toContain('Flagged Questions');
    expect(html).toMatch(/Question\s*(<!-- -->)?\s*1/);
  });

  it('renders ExamIntegrityStudentProTips', () => {
    const html = renderToString(
      <ExamIntegrityStudentProTips tips={['Tip one', 'Tip two']} />
    );
    expect(html).toContain('Focus Tips');
    expect(html).toContain('Tip one');
  });

  it('renders ExamIntegrityStudentQuestionPanelHeader', () => {
    const html = renderToString(
      <ExamIntegrityStudentQuestionPanelHeader
        questionNumber={5}
        subject="Mathematics"
      />
    );
    expect(html).toMatch(/Question\s*(<!-- -->)?\s*5/);
    expect(html).toContain('Mathematics');
  });

  it('renders ExamIntegrityStudentSubmitModal', () => {
    const html = renderToString(
      <ExamIntegrityStudentSubmitModal
        open={true}
        answeredCount={8}
        totalCount={10}
        onBack={vi.fn()}
        onFinalSubmit={vi.fn()}
      />
    );
    expect(html).toContain('Confirm Submission');
    expect(html).toContain('Answer Progress');
    expect(html).toMatch(/8(<!-- -->)?\s*\/\s*(<!-- -->)?10/);
  });

  it('renders ExamIntegrityStudentGradeSwitcher', () => {
    const html = renderToString(
      <ExamIntegrityStudentGradeSwitcher
        students={[
          {
            sessionId: 's-1',
            studentId: 'ST-1',
            studentName: 'Student 1',
            finalScore10: 9.2,
            totalEarned: 9.2,
            totalMax: 10,
          },
        ]}
        onSelectStudent={vi.fn()}
      />
    );
    expect(html).toContain('Student Exam Submissions');
    expect(html).toContain('Student 1');
  });

  it('renders ExamIntegrityTopBar', () => {
    const html = renderToString(
      <ExamIntegrityTopBar appTitle="Test Portal" userName="Teacher User" />
    );
    expect(html).toContain('Test Portal');
    expect(html).toContain('Teacher User');
  });

  it('renders ExamIntegrityReviewDashboard', () => {
    const html = renderToString(
      <ExamIntegrityReviewDashboard
        dashboard={{
          totalEarned: 10,
          totalMax: 10,
          finalScore10: 10,
          scores: [],
        }}
      />
    );
    expect(html).toContain('Exam Results');
    expect(html).toContain('10.0');
  });
});

