import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityQuestionBankCard } from './ExamIntegrityQuestionBankCard';

const meta: Meta<typeof ExamIntegrityQuestionBankCard> = {
  title: 'Organisms/ExamIntegrityQuestionBankCard',
  component: ExamIntegrityQuestionBankCard,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionBankCard>;

export const Default: Story = {
  args: {
    index: 0,
    content: 'Which of the following is true about React useEffect cleanup functions?',
    type: 'MCQ',
    points: 1,
    usesCount: 5,
    tags: ['React', 'Hooks', 'Frontend'],
  },
};

