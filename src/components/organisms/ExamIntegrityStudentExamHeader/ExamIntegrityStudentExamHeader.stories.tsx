import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentExamHeader } from './ExamIntegrityStudentExamHeader';

const meta: Meta<typeof ExamIntegrityStudentExamHeader> = {
  title: 'Organisms/ExamIntegrityStudentExamHeader',
  component: ExamIntegrityStudentExamHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentExamHeader>;

export const Default: Story = {
  args: {
    currentQuestion: 5,
    totalQuestions: 20,
    remainingSeconds: 1800,
    isProctoringActive: true,
  },
};

export const UrgentTime: Story = {
  args: {
    currentQuestion: 19,
    totalQuestions: 20,
    remainingSeconds: 120,
    isProctoringActive: true,
  },
};

export const ProctoringOff: Story = {
  args: {
    currentQuestion: 1,
    totalQuestions: 10,
    remainingSeconds: 3600,
    isProctoringActive: false,
  },
};

