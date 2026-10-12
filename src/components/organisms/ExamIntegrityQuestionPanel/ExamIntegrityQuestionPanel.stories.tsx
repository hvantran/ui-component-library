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

export const Grade1MultiPartMathQuestion: Story = {
  args: {
    questionNumber: 1,
    subject: 'Toán',
    gradeLevel: 'Grade 1',
    questionStem: 'Số?',
    questionText: 'Số?',
    questionType: 'ESSAY_SHORT',
    questionParts: [
      { key: 'A', prompt: '6 + 8 = .........' },
      { key: 'B', prompt: '18 - 6 = .........' },
      { key: 'C', prompt: '12 - 9 = .........' },
      { key: 'D', prompt: '7 + 5 = .........' },
      { key: 'E', prompt: '12 - 9 = .........' },
      { key: 'F', prompt: '15 - 7 = .........' },
    ],
    selectedAnswerParts: [],
    onAnswerChange: () => {},
    onAnswerPartsChange: () => {},
    onFlag: () => {},
  },
};

const SAMPLE_GEOMETRY_CIRCLE =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="%2338bdf8" stroke="%230284c7" stroke-width="4"/></svg>';

const SAMPLE_GEOMETRY_SQUARE =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><rect x="15" y="15" width="90" height="90" fill="%23f472b6" stroke="%23db2777" stroke-width="4" rx="8"/></svg>';

const SAMPLE_GEOMETRY_TRIANGLE =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><polygon points="60,15 105,105 15,105" fill="%23facc15" stroke="%23ca8a04" stroke-width="4"/></svg>';

const SAMPLE_GEOMETRY_STAR =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><polygon points="60,10 75,45 112,48 83,72 92,108 60,88 28,108 37,72 8,48 45,45" fill="%234ade80" stroke="%2316a34a" stroke-width="3"/></svg>';

export const MultipleChoiceWithOptionsImagesStandard: Story = {
  args: {
    questionNumber: 4,
    subject: 'Geometry',
    gradeLevel: 'Grade 7',
    questionText: 'Which shape represents a regular hexagon with equal sides and angles?',
    questionType: 'MCQ',
    options: [
      { key: 'A', text: 'Circle', imageBase64: SAMPLE_GEOMETRY_CIRCLE },
      { key: 'B', text: 'Square', imageBase64: SAMPLE_GEOMETRY_SQUARE },
      { key: 'C', text: 'Triangle', imageBase64: SAMPLE_GEOMETRY_TRIANGLE },
      { key: 'D', text: 'Star polygon', imageBase64: SAMPLE_GEOMETRY_STAR },
    ],
    selectedAnswer: 'B',
    onAnswerChange: () => {},
    onFlag: () => {},
  },
};

export const MultipleChoiceWithOptionsImagesElementary: Story = {
  args: {
    questionNumber: 3,
    subject: 'Toán',
    gradeLevel: 'Grade 2',
    questionText: 'Hình nào dưới đây là hình tròn?',
    questionType: 'MCQ',
    options: [
      { key: 'A', text: 'Hình tròn', imageBase64: SAMPLE_GEOMETRY_CIRCLE },
      { key: 'B', text: 'Hình vuông', imageBase64: SAMPLE_GEOMETRY_SQUARE },
      { key: 'C', text: 'Hình tam giác', imageBase64: SAMPLE_GEOMETRY_TRIANGLE },
    ],
    selectedAnswer: 'A',
    onAnswerChange: () => {},
    onFlag: () => {},
  },
};

