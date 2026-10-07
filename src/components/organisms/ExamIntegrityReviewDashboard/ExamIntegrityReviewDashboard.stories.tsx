import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityReviewDashboard,
  ExamIntegrityReviewDashboardData,
} from './ExamIntegrityReviewDashboard';

const mockData: ExamIntegrityReviewDashboardData = {
  totalEarned: 8.5,
  totalMax: 10,
  finalScore10: 8.5,
  missedQuestionNumbers: [3, 7],
  scores: [
    { questionId: 'q-1', questionNumber: 1, status: 'CORRECT', earnedPoints: 2, maxPoints: 2 },
    { questionId: 'q-2', questionNumber: 2, status: 'CORRECT', earnedPoints: 2, maxPoints: 2 },
    { questionId: 'q-3', questionNumber: 3, status: 'INCORRECT', earnedPoints: 0, maxPoints: 2 },
    { questionId: 'q-4', questionNumber: 4, status: 'CORRECT', earnedPoints: 2, maxPoints: 2 },
    { questionId: 'q-5', questionNumber: 5, status: 'PENDING_ESSAY', earnedPoints: 0, maxPoints: 2 },
  ],
};

const meta: Meta<typeof ExamIntegrityReviewDashboard> = {
  title: 'Organisms/ExamIntegrityReviewDashboard',
  component: ExamIntegrityReviewDashboard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityReviewDashboard>;

export const Default: Story = {
  args: {
    dashboard: mockData,
  },
};

export const Loading: Story = {
  args: {
    dashboard: mockData,
    isLoading: true,
  },
};

