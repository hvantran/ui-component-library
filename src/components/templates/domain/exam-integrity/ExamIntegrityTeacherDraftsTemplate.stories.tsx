import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityTeacherDraftsTemplate } from './ExamIntegrityTeacherDraftsTemplate';

const meta: Meta<typeof ExamIntegrityTeacherDraftsTemplate> = {
  title: 'Templates/Domain/ExamIntegrity/ExamIntegrityTeacherDraftsTemplate',
  component: ExamIntegrityTeacherDraftsTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherDraftsTemplate>;

export const Default: Story = {
  args: {
    userName: 'Prof. Hoa Tran',
    children: (
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Exam Drafts</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Unpublished drafts undergoing teacher editorial review.
        </p>
      </div>
    ),
  },
};

