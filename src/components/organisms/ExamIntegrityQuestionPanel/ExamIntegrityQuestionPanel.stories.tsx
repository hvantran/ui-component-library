import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityQuestionPanel } from './ExamIntegrityQuestionPanel';

const meta: Meta<typeof ExamIntegrityQuestionPanel> = {
  title: 'Organisms/ExamIntegrityQuestionPanel',
  component: ExamIntegrityQuestionPanel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionPanel>;

export const MultipleChoiceElementary: Story = {
  args: {
    questionNumber: 1,
    subject: 'Math',
    gradeLevel: 'Grade 3',
    questionText: 'Tính: 25 + 17 = ?',
    questionType: 'MCQ',
    options: [
      { key: 'A', text: '42' },
      { key: 'B', text: '32' },
      { key: 'C', text: '52' },
      { key: 'D', text: '40' },
    ],
    selectedAnswer: 'A',
    onAnswerChange: () => {},
    onFlag: () => {},
  },
};

export const MultipleChoiceMiddle: Story = {
  args: {
    questionNumber: 5,
    subject: 'Science',
    gradeLevel: 'Grade 8',
    questionText: 'Which organelle is known as the powerhouse of the cell?',
    questionType: 'MCQ',
    options: [
      { key: 'A', text: 'Nucleus' },
      { key: 'B', text: 'Mitochondria' },
      { key: 'C', text: 'Ribosome' },
      { key: 'D', text: 'Endoplasmic Reticulum' },
    ],
    selectedAnswer: '',
    onAnswerChange: () => {},
    onFlag: () => {},
  },
};

export const EssayQuestion: Story = {
  args: {
    questionNumber: 2,
    subject: 'Literature',
    gradeLevel: 'Grade 10',
    questionText: 'Nêu cảm nhận của em về bài thơ "Đoàn thuyền đánh cá" của Huy Cận.',
    questionType: 'ESSAY_LONG',
    selectedAnswer: '',
    onAnswerChange: () => {},
    onFlag: () => {},
  },
};

export const LoadingState: Story = {
  args: {
    questionNumber: 1,
    questionText: '',
    questionType: 'MCQ',
    isLoading: true,
    onAnswerChange: () => {},
  },
};

