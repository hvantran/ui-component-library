import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentExamTemplate } from './ExamIntegrityStudentExamTemplate';
import { Card } from '../../../atoms/Card';
import { Button } from '../../../atoms/Button';
import { TimerDisplay } from '../../../molecules/TimerDisplay';

const meta: Meta<typeof ExamIntegrityStudentExamTemplate> = {
  title: 'Templates/ExamIntegrityStudentExamTemplate',
  component: ExamIntegrityStudentExamTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentExamTemplate>;

export const Default: Story = {
  render: () => (
    <ExamIntegrityStudentExamTemplate
      headerSlot={
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold text-lg text-gray-900 dark:text-gray-100">
            CS301: Advanced Operating Systems Final
          </div>
          <TimerDisplay initialSeconds={3540} />
        </div>
      }
      navigationSlot={
        <div className="flex items-center gap-2 overflow-x-auto">
          {Array.from({ length: 10 }).map((_, i) => (
            <button
              key={i}
              className={`w-8 h-8 rounded-full text-xs font-semibold flex items-center justify-center ${
                i === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      }
      contentSlot={
        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">Question 3 of 10</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Explain the difference between preemptive and cooperative multitasking in modern kernels.
          </p>
          <textarea
            rows={8}
            className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:border-gray-700"
            placeholder="Type your answer here..."
          />
        </Card>
      }
      sidebarSlot={
        <Card className="p-4 space-y-3">
          <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Exam Instructions</h4>
          <p className="text-xs text-gray-500">
            Ensure webcam is visible at all times. Do not switch browser tabs or open external developer tools.
          </p>
        </Card>
      }
      footerSlot={
        <>
          <Button variant="secondary">Previous</Button>
          <div className="flex gap-3">
            <Button variant="outline">Save Draft</Button>
            <Button variant="primary">Next Question</Button>
          </div>
        </>
      }
    />
  ),
};

export const LayoutWrapperMode: Story = {
  render: () => (
    <ExamIntegrityStudentExamTemplate>
      <div className="max-w-4xl mx-auto py-12 px-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Exam Session Active</h1>
        <Card className="p-6">
          <p className="text-gray-600 dark:text-gray-300">
            This mode matches the exact StudentManExamLayout container used across exam sessions.
          </p>
        </Card>
      </div>
    </ExamIntegrityStudentExamTemplate>
  ),
};
