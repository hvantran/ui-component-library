import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityTeacherQuestionBankTemplate } from './ExamIntegrityTeacherQuestionBankTemplate';

const meta: Meta<typeof ExamIntegrityTeacherQuestionBankTemplate> = {
  title: 'Templates/ExamIntegrityTeacherQuestionBankTemplate',
  component: ExamIntegrityTeacherQuestionBankTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherQuestionBankTemplate>;

export const Default: Story = {
  args: {
    userName: 'Prof. Hoa Tran',
    filterBar: (
      <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 flex gap-4">
        <input
          type="text"
          placeholder="Search questions…"
          className="border border-gray-300 dark:border-gray-700 rounded px-3 py-1.5 text-sm w-64 bg-transparent"
        />
        <select className="border border-gray-300 dark:border-gray-700 rounded px-3 py-1.5 text-sm bg-transparent">
          <option>All Subjects</option>
          <option>Math</option>
          <option>Physics</option>
        </select>
      </div>
    ),
    children: (
      <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
        <h4 className="font-semibold text-gray-900 dark:text-white">Sample Question #1</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
          Solve for x: 2x + 10 = 20.
        </p>
      </div>
    ),
  },
};

export const Loading: Story = {
  args: {
    userName: 'Prof. Hoa Tran',
    isLoading: true,
  },
};

