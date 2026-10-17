import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityQuestionReviewSummaryCard } from './ExamIntegrityQuestionReviewSummaryCard';

const meta: Meta<typeof ExamIntegrityQuestionReviewSummaryCard> = {
  title: 'Organisms/ExamIntegrityQuestionReviewSummaryCard',
  component: ExamIntegrityQuestionReviewSummaryCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionReviewSummaryCard>;

export const Default: Story = {
  args: {
    title: 'Draft Info',
    filename: 'Midterm_Exam_2026.pdf',
    totalQuestions: 25,
    totalPoints: 100,
    flaggedCount: 2,
  },
};

