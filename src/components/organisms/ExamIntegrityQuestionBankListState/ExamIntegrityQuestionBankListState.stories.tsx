import type { Meta, StoryObj } from '@storybook/react';
import {
  ExamIntegrityQuestionBankListLoader,
  ExamIntegrityQuestionBankEndMessage,
} from './ExamIntegrityQuestionBankListState';

const meta: Meta = {
  title: 'Organisms/ExamIntegrityQuestionBankListState',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Loader: StoryObj<typeof ExamIntegrityQuestionBankListLoader> = {
  render: () => <ExamIntegrityQuestionBankListLoader count={3} />,
};

export const EndMessage: StoryObj<typeof ExamIntegrityQuestionBankEndMessage> = {
  render: () => <ExamIntegrityQuestionBankEndMessage message="All results loaded" />,
};

