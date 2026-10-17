import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityQuestionBankEditCard } from './ExamIntegrityQuestionBankEditCard';

const meta: Meta<typeof ExamIntegrityQuestionBankEditCard> = {
  title: 'Organisms/ExamIntegrityQuestionBankEditCard',
  component: ExamIntegrityQuestionBankEditCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionBankEditCard>;

export const Default: Story = {
  args: {
    initialValues: {
      content: 'What is the purpose of React keys?',
      type: 'MCQ',
      difficulty: 'Medium',
      options: ['Identify unique items', 'Performance only', 'Styling hooks', 'Routing'],
      optionImages: [undefined, undefined, undefined, undefined],
      correctAnswer: 'A',
      points: 1,
      tags: 'React, Virtual DOM',
    },
    onSave: () => {},
    onCancel: () => {},
    isSaving: false,
  },
};

