import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityQuestionDisplay } from './ExamIntegrityQuestionDisplay';

const meta: Meta<typeof ExamIntegrityQuestionDisplay> = {
  title: 'Organisms/ExamIntegrityQuestionDisplay',
  component: ExamIntegrityQuestionDisplay,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionDisplay>;

export const MultipleChoice: Story = {
  args: {
    index: 0,
    question: {
      id: 'q-1',
      questionNumber: 1,
      content: 'Chữ số 5 trong số 45 678 có giá trị là bao nhiêu?',
      type: 'MCQ',
      points: 1,
      options: ['5', '50', '500', '5000'],
      correctAnswer: 'D',
      parserConfidence: 0.95,
      truncated: false,
    },
    questionScore: 1,
    selectedCorrectAnswer: 'D',
  },
};

export const Calculation: Story = {
  args: {
    index: 1,
    question: {
      id: 'q-2',
      questionNumber: 2,
      content: 'Đặt tính rồi tính;\n125 + 345;\n678 - 234',
      type: 'ESSAY_SHORT',
      points: 2,
      parserConfidence: 0.88,
      truncated: false,
    },
    questionScore: 2,
  },
};

export const EssayWithRubric: Story = {
  args: {
    index: 2,
    question: {
      id: 'q-3',
      questionNumber: 3,
      content: 'Nêu ý nghĩa lịch sử của chiến thắng Điện Biên Phủ.',
      type: 'ESSAY_LONG',
      points: 3,
      rubric: {
        keywords: ['lừng lẫy năm châu', 'chấn động địa cầu', '1954', 'thực dân Pháp'],
      },
      parserConfidence: 0.65,
      parserWarnings: ['Low OCR confidence on source page 4'],
      truncated: false,
    },
    questionScore: 3,
  },
};

