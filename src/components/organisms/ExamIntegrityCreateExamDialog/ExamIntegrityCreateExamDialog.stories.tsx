import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityCreateExamDialog } from './ExamIntegrityCreateExamDialog';

const meta: Meta<typeof ExamIntegrityCreateExamDialog> = {
  title: 'Organisms/ExamIntegrityCreateExamDialog',
  component: ExamIntegrityCreateExamDialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityCreateExamDialog>;

export const Open: Story = {
  args: {
    open: true,
    onClose: () => {},
    onSubmit: () => {},
    isLoading: false,
    availableTags: ['Grade 10', 'Calculus', 'Algebra', 'Physics', 'Chemistry'],
    isTagsLoading: false,
  },
};

