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
  ExamIntegrityEggShop,
  ExamIntegrityPetHatchery,
} from './index';

describe('ExamIntegrity Organisms', () => {
  it('renders ExamIntegrityTeacherDashboardSidebar', () => {
    const html = renderToString(<ExamIntegrityTeacherDashboardSidebar activeSection="dashboard" />);
    expect(html).toContain('Teacher Portal');
    expect(html).toContain('Dashboard');
    expect(html).toContain('top-16 bottom-0');
  });

  it('renders ExamIntegrityTeacherDashboardSidebar in docked and auto-hide modes with controls', () => {
    const onDockChange = vi.fn();
    const dockedHtml = renderToString(
      <ExamIntegrityTeacherDashboardSidebar
        userName="Prof. Wright"
        dockMode="docked"
        onDockModeChange={onDockChange}
      />
    );
    expect(dockedHtml).toContain('data-dock-mode="docked"');
    expect(dockedHtml).toContain('data-testid="dock-mode-pinned-btn"');
    expect(dockedHtml).toContain('data-testid="dock-mode-docked-btn"');
    expect(dockedHtml).toContain('data-testid="dock-mode-autohide-btn"');
    expect(dockedHtml).toContain('w-[72px]');

    const autohideHtml = renderToString(
      <ExamIntegrityTeacherDashboardSidebar
        userName="Prof. Wright"
        dockMode="auto-hide"
        onDockModeChange={onDockChange}
      />
    );
    expect(autohideHtml).toContain('data-dock-mode="auto-hide"');
    expect(autohideHtml).toContain('data-testid="sidebar-autohide-trigger"');
  });

  it('renders ExamIntegrityStudentPortalSidebar', () => {
    const html = renderToString(
      <ExamIntegrityStudentPortalSidebar studentName="John Doe" activeSection="dashboard" />
    );
    expect(html).toContain('John Doe');
    expect(html).toContain('My Exams');
    expect(html).toContain('Shop');
  });

  it('renders ExamIntegrityStudentPortalSidebar in docked and auto-hide modes with controls', () => {
    const onDockChange = vi.fn();
    const dockedHtml = renderToString(
      <ExamIntegrityStudentPortalSidebar
        studentName="John Doe"
        dockMode="docked"
        onDockModeChange={onDockChange}
      />
    );
    expect(dockedHtml).toContain('data-dock-mode="docked"');
    expect(dockedHtml).toContain('data-testid="dock-mode-pinned-btn"');

    const autohideHtml = renderToString(
      <ExamIntegrityStudentPortalSidebar
        studentName="John Doe"
        dockMode="auto-hide"
        onDockModeChange={onDockChange}
      />
    );
    expect(autohideHtml).toContain('data-dock-mode="auto-hide"');
    expect(autohideHtml).toContain('data-testid="sidebar-autohide-trigger"');
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
      <ExamIntegrityTopBar appTitle="Test Portal" userName="Teacher User" starCount={88} />
    );
    expect(html).toContain('Test Portal');
    expect(html).toContain('Teacher User');
    expect(html).toContain('88');
    expect(html).toContain('star-counter-badge');
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

  it('renders ExamIntegrityEggShop', () => {
    const html = renderToString(<ExamIntegrityEggShop starBalance={1200} />);
    expect(html).toContain('3D Pet Egg Shop');
    expect(html).toContain('1,200');
    expect(html).toContain('Stars');
  });

  it('renders ExamIntegrityPetHatchery', () => {
    const html = renderToString(<ExamIntegrityPetHatchery starBalance={300} />);
    expect(html).toContain('Pet Hatchery &amp; Sanctuary');
    expect(html).toContain('Incubator');
    expect(html).toContain('My Pets');
  });
});

