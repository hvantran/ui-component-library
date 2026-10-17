import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityStudentExamResultsGrid } from './ExamIntegrityStudentExamResultsGrid';
import { ExamIntegrityStudentExamResultCard } from '../ExamIntegrityStudentExamResultCard';

const meta: Meta<typeof ExamIntegrityStudentExamResultsGrid> = {
  title: 'Organisms/ExamIntegrityStudentExamResultsGrid',
  component: ExamIntegrityStudentExamResultsGrid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentExamResultsGrid>;

export const Default: Story = {
  render: () => (
    <ExamIntegrityStudentExamResultsGrid>
      <ExamIntegrityStudentExamResultCard
        sessionId="sess-1"
        examTitle="Midterm Mathematics Exam"
        submittedAt="2026-10-15T09:30:00Z"
        finalScore10={8.5}
        totalEarned={85}
        totalMax={100}
        starsEarned={9}
        pendingEssayCount={1}
        isSelected={false}
        onSelect={() => {}}
      />
      <ExamIntegrityStudentExamResultCard
        sessionId="sess-2"
        examTitle="Physics Final Exam"
        submittedAt="2026-10-14T14:00:00Z"
        finalScore10={9.2}
        totalEarned={92}
        totalMax={100}
        starsEarned={9}
        isSelected={true}
        onSelect={() => {}}
      />
    </ExamIntegrityStudentExamResultsGrid>
  ),
};
