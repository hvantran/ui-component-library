import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityStudentReviewTemplate } from './ExamIntegrityStudentReviewTemplate';

const meta: Meta<typeof ExamIntegrityStudentReviewTemplate> = {
  title: 'Templates/Domain/ExamIntegrity/ExamIntegrityStudentReviewTemplate',
  component: ExamIntegrityStudentReviewTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentReviewTemplate>;

export const Default: Story = {
  args: {
    studentName: 'Alex Nguyen',
    activeSection: 'results',
    children: (
      <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Review Results</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Exam finished with score 8.5/10. Review your answer feedback below.
        </p>
      </div>
    ),
  },
};

