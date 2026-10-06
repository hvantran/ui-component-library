import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityStudentExamFooterTemplate } from './ExamIntegrityStudentExamFooterTemplate';

const meta: Meta<typeof ExamIntegrityStudentExamFooterTemplate> = {
  title: 'Templates/Domain/ExamIntegrity/ExamIntegrityStudentExamFooterTemplate',
  component: ExamIntegrityStudentExamFooterTemplate,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentExamFooterTemplate>;

export const Default: Story = {
  args: {
    children: (
      <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <span className="text-sm text-gray-600 dark:text-gray-300">Examination Navigation</span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium">
          Continue
        </button>
      </div>
    ),
  },
};

