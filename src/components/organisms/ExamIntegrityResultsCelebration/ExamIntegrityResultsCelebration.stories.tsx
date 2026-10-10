import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityResultsCelebration } from './ExamIntegrityResultsCelebration';

const meta: Meta<typeof ExamIntegrityResultsCelebration> = {
  title: 'Organisms/ExamIntegrityResultsCelebration',
  component: ExamIntegrityResultsCelebration,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityResultsCelebration>;

export const PerfectScore: Story = {
  args: {
    studentName: 'Bình An',
    dashboard: {
      finalScore10: 10,
      totalEarnedPoints: 10,
      totalMaxPoints: 10,
      scores: [
        {
          questionId: 'q1',
          questionNumber: 1,
          earnedPoints: 5,
          maxPoints: 5,
          status: 'CORRECT',
          studentAnswer: 'A',
          correctAnswer: 'A',
        },
        {
          questionId: 'q2',
          questionNumber: 2,
          earnedPoints: 5,
          maxPoints: 5,
          status: 'CORRECT',
          studentAnswer: '42',
          correctAnswer: '42',
        },
      ],
    },
    onBackToQuests: () => {},
  },
};

export const GreatEffortWithLearningMoments: Story = {
  args: {
    studentName: 'Minh Đăng',
    dashboard: {
      finalScore10: 7.5,
      totalEarnedPoints: 7.5,
      totalMaxPoints: 10,
      scores: [
        {
          questionId: 'q1',
          questionNumber: 1,
          earnedPoints: 5,
          maxPoints: 5,
          status: 'CORRECT',
          studentAnswer: 'B',
          correctAnswer: 'B',
        },
        {
          questionId: 'q2',
          questionNumber: 2,
          earnedPoints: 2.5,
          maxPoints: 5,
          status: 'INCORRECT',
          studentAnswer: 'C',
          correctAnswer: 'A',
        },
      ],
    },
    onBackToQuests: () => {},
  },
};

