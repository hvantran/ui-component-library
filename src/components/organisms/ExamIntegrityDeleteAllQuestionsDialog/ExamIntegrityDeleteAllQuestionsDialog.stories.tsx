import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityDeleteAllQuestionsDialog } from './ExamIntegrityDeleteAllQuestionsDialog';

const meta: Meta<typeof ExamIntegrityDeleteAllQuestionsDialog> = {
  title: 'Organisms/ExamIntegrityDeleteAllQuestionsDialog',
  component: ExamIntegrityDeleteAllQuestionsDialog,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityDeleteAllQuestionsDialog>;

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    isDeleting: false,
    totalCount: 15,
  },
};

