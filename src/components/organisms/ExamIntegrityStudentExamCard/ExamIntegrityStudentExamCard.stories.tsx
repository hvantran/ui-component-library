import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentExamCard } from './ExamIntegrityStudentExamCard';

const meta: Meta<typeof ExamIntegrityStudentExamCard> = {
  title: 'Organisms/ExamIntegrityStudentExamCard',
  component: ExamIntegrityStudentExamCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentExamCard>;

export const ElementaryQuest: Story = {
  args: {
    id: 'exam-1',
    title: 'Multiplication Safari Quest',
    questionCount: 10,
    durationSeconds: 1200,
    totalPoints: 50,
    tags: ['Math', 'Grade 3'],
    isElementary: true,
    subject: 'math',
    onStart: () => {},
  },
};

export const StandardExam: Story = {
  args: {
    id: 'exam-2',
    title: 'Calculus I Midterm Examination',
    questionCount: 25,
    durationSeconds: 3600,
    totalPoints: 100,
    tags: ['Math', 'Higher Ed'],
    isElementary: false,
    onStart: () => {},
  },
};

