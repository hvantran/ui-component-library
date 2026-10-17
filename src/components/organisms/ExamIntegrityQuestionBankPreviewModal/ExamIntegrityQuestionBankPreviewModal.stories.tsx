import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityQuestionBankPreviewModal } from './ExamIntegrityQuestionBankPreviewModal';

const meta: Meta<typeof ExamIntegrityQuestionBankPreviewModal> = {
  title: 'Organisms/ExamIntegrityQuestionBankPreviewModal',
  component: ExamIntegrityQuestionBankPreviewModal,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionBankPreviewModal>;

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    totalElements: 2,
    questions: [
      {
        id: '1',
        questionNumber: 1,
        questionText: 'What is TypeScript?',
        questionType: 'MCQ',
        options: [
          { key: 'A', text: 'Typed superset of JavaScript' },
          { key: 'B', text: 'A database' },
        ],
      },
    ],
  },
};

