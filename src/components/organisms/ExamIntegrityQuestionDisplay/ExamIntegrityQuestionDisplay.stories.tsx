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

export const MultipleChoiceWithOptionsImages: Story = {
  args: {
    index: 3,
    question: {
      id: 'q-4',
      questionNumber: 4,
      content: 'Chọn biển báo chỉ dẫn hướng đi bắt buộc:',
      type: 'MCQ',
      points: 1,
      options: [
        'Biển 1 data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="35" fill="%232563eb"/><path d="M25 40h30M45 30l10 10-10 10" stroke="%23ffffff" stroke-width="6" fill="none"/></svg>',
        'Biển 2 data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="35" fill="%23dc2626"/><path d="M25 25l30 30M55 25l-30 30" stroke="%23ffffff" stroke-width="6"/></svg>',
      ],
      correctAnswer: 'A',
      parserConfidence: 0.99,
      truncated: false,
    },
    questionScore: 1,
    selectedCorrectAnswer: 'A',
  },
};

