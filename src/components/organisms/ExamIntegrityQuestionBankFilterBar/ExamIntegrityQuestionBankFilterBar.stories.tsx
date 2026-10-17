import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityQuestionBankFilterBar } from './ExamIntegrityQuestionBankFilterBar';

const meta: Meta<typeof ExamIntegrityQuestionBankFilterBar> = {
  title: 'Organisms/ExamIntegrityQuestionBankFilterBar',
  component: ExamIntegrityQuestionBankFilterBar,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionBankFilterBar>;

export const Default: Story = {
  args: {
    searchQuery: '',
    onSearchChange: () => {},
    typeFilter: '',
    onTypeChange: () => {},
    typeOptions: [
      { value: 'MCQ', label: 'MCQ' },
      { value: 'ESSAY_SHORT', label: 'Essay (Short)' },
      { value: 'ESSAY_LONG', label: 'Essay (Long)' },
    ],
    tagInput: '',
    onTagInputChange: () => {},
    availableTags: ['React', 'TypeScript', 'Algorithms', 'CSS'],
    isTagsLoading: false,
    selectedTags: ['React'],
    onAddTag: () => {},
    onRemoveTag: () => {},
  },
};

