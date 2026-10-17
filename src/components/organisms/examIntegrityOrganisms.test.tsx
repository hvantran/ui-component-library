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
  ExamIntegrityTopBar,
  ExamIntegrityReviewDashboard,
  ExamIntegrityEggShop,
  ExamIntegrityPetHatchery,
  ExamIntegrityStudentQuestTrail,
  ExamIntegrityStudentElementarySidebar,
  ExamIntegrityExamCard,
  ExamIntegrityCreateExamDialog,
  ExamIntegrityExamFilterBar,
  ExamIntegrityExamPreviewModal,
  ExamIntegrityMcqOptionsForm,
  ExamIntegrityQuestionBankCard,
  ExamIntegrityQuestionBankEditCard,
  ExamIntegrityQuestionBankFilterBar,
  ExamIntegrityQuestionBankActionBar,
  ExamIntegrityAddQuestionDialog,
  ExamIntegrityDeleteAllQuestionsDialog,
  ExamIntegrityQuestionBankPreviewModal,
  ExamIntegrityQuestionBankListLoader,
  ExamIntegrityQuestionBankEndMessage,
  ExamIntegrityStudentWelcomeBanner,
  ExamIntegrityStudentExamCard,
  ExamIntegrityStudentAchievementsTray,
  ExamIntegrityExamGrid,
  ExamIntegrityExamGridLoader,
  ExamIntegrityReplaceFromBankModal,
  ExamIntegrityQuestionReviewWorkspace,
  ExamIntegrityQuestionReviewSummaryCard,
  ExamIntegrityStudentExamResultCard,
  ExamIntegrityStudentExamResultsGrid,
  ExamIntegrityTeacherPdfIngestionZone,
  ExamIntegrityReviewContentContainer,
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
    expect(html).toContain('Ancient Mysterious Egg');
    expect(html).toContain('Stars');
    expect(html).toContain('Adopt Mystery Egg');
  });

  it('renders ExamIntegrityPetHatchery', () => {
    const html = renderToString(<ExamIntegrityPetHatchery starBalance={300} />);
    expect(html).toContain('Pet Hatchery &amp; Sanctuary');
    expect(html).toContain('Incubator');
    expect(html).toContain('My Pets');
  });

  it('renders ExamIntegrityStudentQuestTrail', () => {
    const html = renderToString(
      <ExamIntegrityStudentQuestTrail
        totalQuestions={5}
        currentQuestion={2}
        answeredCount={1}
        answeredMap={{ 1: true }}
        flaggedMap={{ 3: true }}
        onSelectQuestion={() => {}}
      />
    );
    expect(html).toContain('Quest Trail:');
    expect(html).toContain('Quest');
    expect(html).toContain('Done');
    expect(html).toContain('🚀');
  });

  it('renders ExamIntegrityStudentElementarySidebar', () => {
    const html = renderToString(
      <ExamIntegrityStudentElementarySidebar
        mascotEmoji="🦉"
        mascotName="Ollie"
        mascotTip="Believe in yourself!"
        flaggedNumbers={[1, 4]}
      />
    );
    expect(html).toContain('Ollie');
    expect(html).toContain('Believe in yourself!');
    expect(html).toContain('Flagged for Review');
    expect(html).toContain('Jump →');
    expect(html).toContain('Proctoring Status');
  });

  it('renders ExamIntegrityExamCard', () => {
    const html = renderToString(
      <ExamIntegrityExamCard
        examId="e-1"
        title="Mid-term Exam"
        durationSeconds={3600}
        questionCount={20}
        totalPoints={100}
        status="ACTIVE"
        tags={['Math', 'Grade 10']}
        onPreview={() => {}}
        onManageQuestions={() => {}}
        onExport={() => {}}
        onDelete={() => {}}
        onSyncQuestions={() => {}}
      />
    );
    expect(html).toContain('Mid-term Exam');
    expect(html).toContain('60');
    expect(html).toContain('min');
    expect(html).toContain('20');
    expect(html).toContain('questions');
    expect(html).toContain('100');
    expect(html).toContain('pts');
    expect(html).toContain('Published');
    expect(html).toContain('Math');
  });

  it('renders ExamIntegrityCreateExamDialog when open', () => {
    const html = renderToString(
      <ExamIntegrityCreateExamDialog
        open
        onClose={() => {}}
        onSubmit={() => {}}
        availableTags={['Math', 'Science']}
      />
    );
    expect(html).toContain('Create Exam from Question Bank');
    expect(html).toContain('Exam Name');
    expect(html).toContain('Duration (minutes)');
    expect(html).toContain('Question Bank Selection');
  });

  it('renders ExamIntegrityExamFilterBar', () => {
    const html = renderToString(
      <ExamIntegrityExamFilterBar
        title="Filter exams"
        subtitle="Showing 5 of 10 exams"
        options={[
          { key: 'all', label: 'All', count: 10 },
          { key: 'published', label: 'Published', count: 5 },
        ]}
        selectedKey="all"
        onSelectKey={() => {}}
      />
    );
    expect(html).toContain('Filter exams');
    expect(html).toContain('Showing 5 of 10 exams');
    expect(html).toContain('All');
    expect(html).toContain('Published');
    expect(html).toContain('10');
  });

  it('renders ExamIntegrityExamPreviewModal when open', () => {
    const html = renderToString(
      <ExamIntegrityExamPreviewModal
        open
        onClose={() => {}}
        examTitle="Sample Quiz"
        questions={[
          {
            questionNumber: 1,
            content: 'Sample Question 1',
            type: 'MCQ',
            options: ['Opt A', 'Opt B'],
          },
        ]}
      />
    );
    expect(html).toContain('Exam Preview');
    expect(html).toContain('Sample Quiz');
    expect(html).toContain('Sample Question 1');
    expect(html).toContain('Close Preview');
  });

  it('renders ExamIntegrityMcqOptionsForm', () => {
    const html = renderToString(
      <ExamIntegrityMcqOptionsForm
        options={['Option A', 'Option B', 'Option C', 'Option D']}
        correctAnswer="A"
        onOptionChange={() => {}}
        onCorrectAnswerChange={() => {}}
      />
    );
    expect(html).toContain('Answer Options');
    expect(html).toContain('Option A');
    expect(html).toContain('Option B');
  });

  it('renders ExamIntegrityQuestionBankCard', () => {
    const html = renderToString(
      <ExamIntegrityQuestionBankCard
        index={0}
        content="What is TypeScript?"
        type="MCQ"
        points={2}
        usesCount={3}
        tags={['TS', 'JS']}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );
    expect(html).toContain('1.');
    expect(html).toContain('What is TypeScript?');
    expect(html).toContain('MCQ');
    expect(html).toContain('2');
    expect(html).toContain('pts');
    expect(html).toContain('3');
    expect(html).toContain('uses');
    expect(html).toContain('TS');
    expect(html).toContain('Edit');
    expect(html).toContain('Delete');
  });

  it('renders ExamIntegrityQuestionBankEditCard', () => {
    const html = renderToString(
      <ExamIntegrityQuestionBankEditCard
        initialValues={{
          content: 'Explain closures',
          type: 'MCQ',
          difficulty: 'Medium',
          options: ['A', 'B', 'C', 'D'],
          optionImages: [undefined, undefined, undefined, undefined],
          correctAnswer: 'A',
          points: 1,
          tags: 'js, closures',
        }}
        onSave={() => {}}
        onCancel={() => {}}
      />
    );
    expect(html).toContain('Edit Question');
    expect(html).toContain('Explain closures');
    expect(html).toContain('Save Changes');
    expect(html).toContain('Cancel');
  });

  it('renders ExamIntegrityQuestionBankFilterBar', () => {
    const html = renderToString(
      <ExamIntegrityQuestionBankFilterBar
        searchQuery="test query"
        onSearchChange={() => {}}
        typeFilter="MCQ"
        onTypeChange={() => {}}
        typeOptions={[{ value: 'MCQ', label: 'MCQ' }]}
        tagInput=""
        onTagInputChange={() => {}}
        availableTags={['tag1', 'tag2']}
        selectedTags={['tag1']}
        onAddTag={() => {}}
        onRemoveTag={() => {}}
      />
    );
    expect(html).toContain('test query');
    expect(html).toContain('tag1');
    expect(html).toContain('MCQ');
  });

  it('renders ExamIntegrityQuestionBankActionBar', () => {
    const html = renderToString(
      <ExamIntegrityQuestionBankActionBar
        totalCount={15}
        onPreview={() => {}}
        onAddQuestion={() => {}}
        onDeleteAll={() => {}}
      />
    );
    expect(html).toContain('Showing');
    expect(html).toContain('15');
    expect(html).toContain('Preview');
    expect(html).toContain('Add Question');
    expect(html).toContain('Delete All');
  });

  it('renders ExamIntegrityAddQuestionDialog when open', () => {
    const html = renderToString(
      <ExamIntegrityAddQuestionDialog
        isOpen
        onClose={() => {}}
        onSubmit={() => {}}
      />
    );
    expect(html).toContain('Add New Question');
    expect(html).toContain('Question Type');
    expect(html).toContain('Difficulty Level');
    expect(html).toContain('Cancel');
    expect(html).toContain('Add Question');
  });

  it('renders ExamIntegrityDeleteAllQuestionsDialog when open', () => {
    const html = renderToString(
      <ExamIntegrityDeleteAllQuestionsDialog
        isOpen
        onClose={() => {}}
        onConfirm={() => {}}
        totalCount={25}
      />
    );
    expect(html).toContain('Delete All Questions');
    expect(html).toContain('25');
    expect(html).toContain('Delete All');
  });

  it('renders ExamIntegrityQuestionBankPreviewModal when open', () => {
    const html = renderToString(
      <ExamIntegrityQuestionBankPreviewModal
        isOpen
        onClose={() => {}}
        totalElements={1}
        questions={[
          {
            id: 'q1',
            questionNumber: 1,
            questionText: 'What is DOM?',
            questionType: 'MCQ',
          },
        ]}
      />
    );
    expect(html).toContain('Question Preview (Student View)');
    expect(html).toContain('Previewing');
    expect(html).toContain('questions');
    expect(html).toContain('What is DOM?');
  });

  it('renders ExamIntegrityQuestionBankListState loader and end message', () => {
    const loaderHtml = renderToString(<ExamIntegrityQuestionBankListLoader count={2} />);
    const endMsgHtml = renderToString(<ExamIntegrityQuestionBankEndMessage message="End of list" />);
    expect(loaderHtml).toContain('Loading more questions');
    expect(endMsgHtml).toContain('End of list');
  });

  it('renders ExamIntegrityStudentWelcomeBanner', () => {
    const html = renderToString(
      <ExamIntegrityStudentWelcomeBanner
        studentName="Leo"
        avatarEmoji="🦁"
      />
    );
    expect(html).toContain('Welcome back, Leo! 🚀');
    expect(html).toContain('🦁');
    expect(html).toContain("Ready for today&#x27;s learning adventures?");
  });

  it('renders ExamIntegrityStudentExamCard in both elementary and standard modes', () => {
    const elemHtml = renderToString(
      <ExamIntegrityStudentExamCard
        id="exam-elem-1"
        title="Math Quest 1"
        questionCount={5}
        durationSeconds={600}
        totalPoints={15}
        tags={['Math', 'G1']}
        isElementary
        subject="math"
        onStart={() => {}}
      />
    );
    expect(elemHtml).toContain('Math Quest 1');
    expect(elemHtml).toContain('🦁 Math');
    expect(elemHtml).toContain('15');
    expect(elemHtml).toContain('Stars');
    expect(elemHtml).toContain('Start Quest');

    const stdHtml = renderToString(
      <ExamIntegrityStudentExamCard
        id="exam-std-1"
        title="Physics Midterm"
        questionCount={20}
        durationSeconds={3600}
        totalPoints={100}
        tags={['Physics']}
        isElementary={false}
        onStart={() => {}}
      />
    );
    expect(stdHtml).toContain('Physics Midterm');
    expect(stdHtml).toContain('20');
    expect(stdHtml).toContain('questions');
    expect(stdHtml).toContain('100');
    expect(stdHtml).toContain('pts');
    expect(stdHtml).toContain('Start Exam');
  });

  it('renders ExamIntegrityStudentAchievementsTray', () => {
    const html = renderToString(<ExamIntegrityStudentAchievementsTray />);
    expect(html).toContain('Recent Badges &amp; Achievements');
    expect(html).toContain('Math Wizard');
    expect(html).toContain('Story Explorer');
    expect(html).toContain('Space Cadet');
    expect(html).toContain('Super Fast');
  });

  it('renders ExamIntegrityExamGrid and ExamIntegrityExamGridLoader', () => {
    const gridHtml = renderToString(
      <ExamIntegrityExamGrid>
        <span>Card 1</span>
        <span>Card 2</span>
      </ExamIntegrityExamGrid>
    );
    expect(gridHtml).toContain('Card 1');
    expect(gridHtml).toContain('Card 2');

    const loaderHtml = renderToString(<ExamIntegrityExamGridLoader count={3} />);
    expect(loaderHtml).toContain('data-testid="exam-grid-skeleton"');
  });

  it('renders ExamIntegrityReplaceFromBankModal when open', () => {
    const html = renderToString(
      <ExamIntegrityReplaceFromBankModal
        open
        onClose={() => {}}
        onSelect={() => {}}
        search="algorithm"
        onSearchChange={() => {}}
        questions={[
          {
            id: 'q1',
            content: 'Describe binary search algorithm',
            type: 'MCQ',
            points: 2,
          },
        ]}
      />
    );
    expect(html).toContain('Select questions from the bank');
    expect(html).toContain('algorithm');
    expect(html).toContain('Describe binary search algorithm');
    expect(html).toContain('Select');
  });

  it('renders ExamIntegrityQuestionReviewWorkspace', () => {
    const html = renderToString(
      <ExamIntegrityQuestionReviewWorkspace
        questions={[
          { id: 'q1', questionNumber: 1 },
          { id: 'q2', questionNumber: 2 },
        ]}
        currentIndex={0}
        onSelectIndex={() => {}}
      >
        <span>Active Question Body</span>
      </ExamIntegrityQuestionReviewWorkspace>
    );
    expect(html).toContain('Question 1');
    expect(html).toContain('Question 2');
    expect(html).toContain('Active Question Body');
    expect(html).toContain('Prev');
    expect(html).toContain('Next');
    expect(html).toContain('1 / 2');
  });

  it('renders ExamIntegrityQuestionReviewSummaryCard', () => {
    const html = renderToString(
      <ExamIntegrityQuestionReviewSummaryCard
        filename="Physics_Exam_2026.pdf"
        totalQuestions={15}
        totalPoints={60}
        flaggedCount={3}
      />
    );
    expect(html).toContain('Draft Info');
    expect(html).toContain('Physics_Exam_2026.pdf');
    expect(html).toContain('15');
    expect(html).toContain('questions');
    expect(html).toContain('60');
    expect(html).toContain('pts');
    expect(html).toContain('3');
    expect(html).toContain('questions need review');
  });

  it('renders ExamIntegrityStudentExamResultCard in standard and elementary modes', () => {
    const onSelect = vi.fn();
    const standardHtml = renderToString(
      <ExamIntegrityStudentExamResultCard
        sessionId="sess-1"
        examTitle="Algebra 101"
        submittedAt="2026-10-15T09:30:00Z"
        finalScore10={8.5}
        totalEarned={85}
        totalMax={100}
        starsEarned={9}
        pendingEssayCount={2}
        isSelected={true}
        onSelect={onSelect}
      />
    );
    expect(standardHtml).toContain('Algebra 101');
    expect(standardHtml).toContain('8.5');
    expect(standardHtml).toContain('/10');
    expect(standardHtml).toContain('85.0');
    expect(standardHtml).toContain('100.0');
    expect(standardHtml).toContain('pts');
    expect(standardHtml).toContain('2');
    expect(standardHtml).toContain('essay pending');
    expect(standardHtml).toContain('border-blue-600');

    const elementaryHtml = renderToString(
      <ExamIntegrityStudentExamResultCard
        sessionId="sess-2"
        examTitle="Math Safari Quest"
        finalScore10={9.0}
        starsEarned={9}
        isElementary={true}
        isSelected={false}
        onSelect={onSelect}
      />
    );
    expect(elementaryHtml).toContain('Math Safari Quest');
    expect(elementaryHtml).toContain('9');
    expect(elementaryHtml).toContain('Stars');
    expect(elementaryHtml).toContain('View Celebration');
  });

  it('renders ExamIntegrityStudentExamResultsGrid', () => {
    const html = renderToString(
      <ExamIntegrityStudentExamResultsGrid>
        <div>Child 1</div>
        <div>Child 2</div>
      </ExamIntegrityStudentExamResultsGrid>
    );
    expect(html).toContain('grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3');
    expect(html).toContain('Child 1');
    expect(html).toContain('Child 2');
  });

  it('renders ExamIntegrityTeacherPdfIngestionZone in processing, success and error states', () => {
    const onSelect = vi.fn();
    const htmlProcessing = renderToString(
      <ExamIntegrityTeacherPdfIngestionZone
        onFileSelect={onSelect}
        isProcessing={true}
      />
    );
    expect(htmlProcessing).toContain('Processing PDF…');

    const htmlSuccess = renderToString(
      <ExamIntegrityTeacherPdfIngestionZone
        onFileSelect={onSelect}
        isSuccess={true}
      />
    );
    expect(htmlSuccess).toContain('Upload successful! Redirecting to review page…');

    const htmlError = renderToString(
      <ExamIntegrityTeacherPdfIngestionZone
        onFileSelect={onSelect}
        error="Invalid PDF syntax"
      />
    );
    expect(htmlError).toContain('Invalid PDF syntax');
  });

  it('renders ExamIntegrityReviewContentContainer', () => {
    const html = renderToString(
      <ExamIntegrityReviewContentContainer>
        <div>Dashboard Review Data</div>
      </ExamIntegrityReviewContentContainer>
    );
    expect(html).toContain('Dashboard Review Data');
    expect(html).toContain('p-2 sm:p-4 min-h-[300px]');
  });
});

