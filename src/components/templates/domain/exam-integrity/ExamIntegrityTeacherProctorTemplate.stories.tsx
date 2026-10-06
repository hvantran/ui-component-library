import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityTeacherProctorTemplate } from './ExamIntegrityTeacherProctorTemplate';

const meta: Meta<typeof ExamIntegrityTeacherProctorTemplate> = {
  title: 'Templates/Domain/ExamIntegrity/ExamIntegrityTeacherProctorTemplate',
  component: ExamIntegrityTeacherProctorTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherProctorTemplate>;

export const Default: Story = {
  args: {
    brandName: 'IntegrityEngine',
    timerDisplay: '00:45:20',
    progressPercent: 30,
    isProctoringActive: true,
    completedCount: 6,
    totalCount: 20,
    children: (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Exam In Progress</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Proctored examination environment with full session tracking.
        </p>
      </div>
    ),
  },
};

