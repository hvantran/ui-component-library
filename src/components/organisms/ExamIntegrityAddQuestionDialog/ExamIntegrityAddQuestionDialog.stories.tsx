import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityAddQuestionDialog } from './ExamIntegrityAddQuestionDialog';

const meta: Meta<typeof ExamIntegrityAddQuestionDialog> = {
  title: 'Organisms/ExamIntegrityAddQuestionDialog',
  component: ExamIntegrityAddQuestionDialog,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityAddQuestionDialog>;

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onSubmit: () => {},
    isSubmitting: false,
  },
};

