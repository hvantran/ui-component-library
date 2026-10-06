import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityTeacherReportsTemplate } from './ExamIntegrityTeacherReportsTemplate';

const meta: Meta<typeof ExamIntegrityTeacherReportsTemplate> = {
  title: 'Templates/Domain/ExamIntegrity/ExamIntegrityTeacherReportsTemplate',
  component: ExamIntegrityTeacherReportsTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherReportsTemplate>;

export const Default: Story = {
  args: {
    userName: 'Prof. Hoa Tran',
    activeTab: 0,
    tabs: ['Overview', 'Integrity Violations', 'Score Distribution', 'Export'],
    children: (
      <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Class Performance Summary</h3>
        <p className="text-gray-500 dark:text-gray-400">
          Average class score: 8.2/10. Integrity confidence index: 98.4%.
        </p>
      </div>
    ),
  },
};

