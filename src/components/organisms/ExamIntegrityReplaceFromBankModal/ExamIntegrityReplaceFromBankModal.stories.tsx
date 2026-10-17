import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityReplaceFromBankModal } from './ExamIntegrityReplaceFromBankModal';

const meta: Meta<typeof ExamIntegrityReplaceFromBankModal> = {
  title: 'Organisms/ExamIntegrityReplaceFromBankModal',
  component: ExamIntegrityReplaceFromBankModal,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityReplaceFromBankModal>;

export const Open: Story = {
  args: {
    open: true,
    onClose: () => {},
    onSelect: () => {},
    search: '',
    onSearchChange: () => {},
    questions: [
      {
        id: 'q1',
        content: 'Which statement accurately describes JavaScript event bubbling?',
        type: 'MCQ',
        points: 1,
      },
      {
        id: 'q2',
        content: 'Explain how React Reconciliation handles keys in array renders.',
        type: 'ESSAY_SHORT',
        points: 2,
      },
    ],
  },
};

