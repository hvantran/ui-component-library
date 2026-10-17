import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityExamCard } from './ExamIntegrityExamCard';

const meta: Meta<typeof ExamIntegrityExamCard> = {
  title: 'Organisms/ExamIntegrityExamCard',
  component: ExamIntegrityExamCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityExamCard>;

export const Published: Story = {
  args: {
    examId: 'exam-1',
    title: 'Advanced Mathematics Mid-term Examination',
    durationSeconds: 3600,
    questionCount: 25,
    totalPoints: 100,
    tags: ['Math', 'Grade 10', 'Algebra'],
    status: 'ACTIVE',
    onPreview: () => {},
    onManageQuestions: () => {},
    onExport: () => {},
    onDelete: () => {},
    onSyncQuestions: () => {},
  },
};

export const Draft: Story = {
  args: {
    examId: 'exam-2',
    title: 'Introduction to Physics Pop Quiz',
    durationSeconds: 1800,
    questionCount: 10,
    totalPoints: 30,
    tags: ['Physics', 'Draft'],
    status: 'DRAFT',
    onPreview: () => {},
    onManageQuestions: () => {},
    onExport: () => {},
    onDelete: () => {},
    onSyncQuestions: () => {},
  },
};

