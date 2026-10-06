import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityStudentExamContentTemplate } from './ExamIntegrityStudentExamContentTemplate';

const meta: Meta<typeof ExamIntegrityStudentExamContentTemplate> = {
  title: 'Templates/Domain/ExamIntegrity/ExamIntegrityStudentExamContentTemplate',
  component: ExamIntegrityStudentExamContentTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentExamContentTemplate>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Exam Question Area</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Calculate the square root of 144 and multiply by 3.
        </p>
      </div>
    ),
    proTips: [
      'Read questions carefully before answering.',
      'Check time limits periodically.',
    ],
    footer: (
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Question 1 of 20</span>
        <span>Autosaved 1 min ago</span>
      </div>
    ),
  },
};

