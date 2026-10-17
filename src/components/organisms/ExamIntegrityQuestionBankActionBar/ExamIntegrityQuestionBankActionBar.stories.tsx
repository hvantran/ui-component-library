import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityQuestionBankActionBar } from './ExamIntegrityQuestionBankActionBar';

const meta: Meta<typeof ExamIntegrityQuestionBankActionBar> = {
  title: 'Organisms/ExamIntegrityQuestionBankActionBar',
  component: ExamIntegrityQuestionBankActionBar,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionBankActionBar>;

export const Default: Story = {
  args: {
    totalCount: 42,
    onPreview: () => {},
    onAddQuestion: () => {},
    onDeleteAll: () => {},
  },
};

