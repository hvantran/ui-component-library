import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityScoringTemplate } from './ExamIntegrityScoringTemplate';
import { Card } from '../../../atoms/Card';

const meta: Meta<typeof ExamIntegrityScoringTemplate> = {
  title: 'Templates/ExamIntegrityScoringTemplate',
  component: ExamIntegrityScoringTemplate,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityScoringTemplate>;

export const Default: Story = {
  render: () => (
    <div className="p-6 max-w-7xl mx-auto">
      <ExamIntegrityScoringTemplate
        queueSlot={
          <Card className="p-4 space-y-2">
            <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-200">Pending Essays</h3>
            <ul className="space-y-1 text-sm">
              <li className="p-2 rounded bg-blue-50 text-blue-700 font-medium">Question 1 - Student #1042</li>
              <li className="p-2 rounded hover:bg-gray-100 text-gray-700">Question 2 - Student #1043</li>
              <li className="p-2 rounded hover:bg-gray-100 text-gray-700">Question 3 - Student #1044</li>
            </ul>
          </Card>
        }
        detailSlot={
          <Card className="p-6 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Question: Describe CAP theorem trade-offs.</h2>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 text-sm">
              In distributed systems, the CAP theorem states that a system can only provide two of three guarantees: Consistency, Availability, and Partition Tolerance...
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="score-input" className="text-sm font-medium">Score (out of 10):</label>
              <input id="score-input" type="number" defaultValue="8" className="border rounded px-3 py-1.5 w-20 text-sm" />
            </div>
          </Card>
        }
      />
    </div>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div className="p-6 max-w-7xl mx-auto">
      <ExamIntegrityScoringTemplate
        isLoading
        queueSlot={<div />}
        detailSlot={<div />}
      />
    </div>
  ),
};
