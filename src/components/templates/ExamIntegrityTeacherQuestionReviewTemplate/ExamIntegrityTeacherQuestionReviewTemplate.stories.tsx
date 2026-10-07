import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityTeacherQuestionReviewTemplate } from './ExamIntegrityTeacherQuestionReviewTemplate';

const meta: Meta<typeof ExamIntegrityTeacherQuestionReviewTemplate> = {
  title: 'Templates/ExamIntegrityTeacherQuestionReviewTemplate',
  component: ExamIntegrityTeacherQuestionReviewTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherQuestionReviewTemplate>;

export const Default: Story = {
  args: {
    userName: 'Prof. Anderson',
    examName: 'Advanced Calculus 2026',
    questionNumber: 4,
    totalQuestions: 25,
    leftPanel: (
      <div className="p-4 text-center text-sm text-gray-500">
        [Simulated Scanned PDF Question #4]
      </div>
    ),
    rightPanel: (
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-900 dark:text-white">Question 4:</h4>
        <p className="text-gray-700 dark:text-gray-300">
          Find the derivative of f(x) = 3x^2 + 2x - 5.
        </p>
      </div>
    ),
  },
};

export const Loading: Story = {
  args: {
    userName: 'Prof. Anderson',
    isLoading: true,
  },
};

