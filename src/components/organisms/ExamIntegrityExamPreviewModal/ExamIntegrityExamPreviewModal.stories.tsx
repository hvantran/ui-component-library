import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityExamPreviewModal } from './ExamIntegrityExamPreviewModal';

const meta: Meta<typeof ExamIntegrityExamPreviewModal> = {
  title: 'Organisms/ExamIntegrityExamPreviewModal',
  component: ExamIntegrityExamPreviewModal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityExamPreviewModal>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    examTitle: 'Sample Science Quiz',
    durationSeconds: 1800,
    questions: [
      {
        questionNumber: 1,
        content: 'What is the chemical symbol for Gold?',
        type: 'MCQ',
        options: ['Au', 'Ag', 'Fe', 'Cu'],
      },
      {
        questionNumber: 2,
        content: 'Explain Newton’s Third Law of Motion in your own words.',
        type: 'ESSAY_SHORT',
      },
    ],
    isLoading: false,
  },
};

