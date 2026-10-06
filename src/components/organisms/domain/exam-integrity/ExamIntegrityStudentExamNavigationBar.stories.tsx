import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentExamNavigationBar } from './ExamIntegrityStudentExamNavigationBar';

const meta: Meta<typeof ExamIntegrityStudentExamNavigationBar> = {
  title: 'Organisms/Domain/ExamIntegrity/ExamIntegrityStudentExamNavigationBar',
  component: ExamIntegrityStudentExamNavigationBar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentExamNavigationBar>;

export const Default: Story = {
  args: {
    canGoPrev: true,
    canGoNext: true,
    isLastQuestion: false,
    flaggedCount: 2,
  },
};

export const FirstQuestion: Story = {
  args: {
    canGoPrev: false,
    canGoNext: true,
    isLastQuestion: false,
    flaggedCount: 0,
  },
};

export const LastQuestionWithFlagged: Story = {
  args: {
    canGoPrev: true,
    canGoNext: false,
    isLastQuestion: true,
    flaggedCount: 3,
    onReviewFlagged: () => {},
  },
};

