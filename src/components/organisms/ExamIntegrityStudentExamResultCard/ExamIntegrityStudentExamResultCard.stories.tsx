import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentExamResultCard } from './ExamIntegrityStudentExamResultCard';

const meta: Meta<typeof ExamIntegrityStudentExamResultCard> = {
  title: 'Organisms/ExamIntegrityStudentExamResultCard',
  component: ExamIntegrityStudentExamResultCard,
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' },
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentExamResultCard>;

export const Standard: Story = {
  args: {
    sessionId: 'sess-1',
    examTitle: 'Midterm Mathematics Exam',
    submittedAt: '2026-10-15T09:30:00Z',
    finalScore10: 8.5,
    totalEarned: 85,
    totalMax: 100,
    starsEarned: 9,
    pendingEssayCount: 1,
    isSelected: false,
    isElementary: false,
  },
};

export const StandardSelected: Story = {
  args: {
    ...Standard.args,
    isSelected: true,
  },
};

export const Elementary: Story = {
  args: {
    sessionId: 'sess-2',
    examTitle: 'Math Safari Quest 🦁',
    submittedAt: '2026-10-15T09:30:00Z',
    finalScore10: 10.0,
    starsEarned: 10,
    isSelected: false,
    isElementary: true,
  },
};

export const ElementarySelected: Story = {
  args: {
    ...Elementary.args,
    isSelected: true,
  },
};
