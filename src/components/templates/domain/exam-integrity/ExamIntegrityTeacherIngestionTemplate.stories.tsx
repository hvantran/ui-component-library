import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityTeacherIngestionTemplate } from './ExamIntegrityTeacherIngestionTemplate';

const meta: Meta<typeof ExamIntegrityTeacherIngestionTemplate> = {
  title: 'Templates/Domain/ExamIntegrity/ExamIntegrityTeacherIngestionTemplate',
  component: ExamIntegrityTeacherIngestionTemplate,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTeacherIngestionTemplate>;

export const Default: Story = {
  args: {
    userName: 'Prof. Hoa Tran',
    children: (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
        <h4 className="font-semibold text-gray-900 dark:text-white">Calculus_Final_2026.pdf</h4>
        <p className="text-sm text-gray-500 mt-1">Uploaded 2 hours ago · Status: Parsed (25 questions)</p>
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

