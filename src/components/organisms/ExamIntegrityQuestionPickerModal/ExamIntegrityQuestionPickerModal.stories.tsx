import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityQuestionPickerModal } from './ExamIntegrityQuestionPickerModal';

const meta: Meta<typeof ExamIntegrityQuestionPickerModal> = {
  title: 'Organisms/ExamIntegrityQuestionPickerModal',
  component: ExamIntegrityQuestionPickerModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionPickerModal>;

export const DefaultOpen: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onSubmit: () => {},
    page: 0,
    totalPages: 3,
    onPageChange: () => {},
    searchText: '',
    onSearchChange: () => {},
    typeFilter: '',
    onTypeFilterChange: () => {},
    questions: [
      {
        id: 'q1',
        questionNumber: 1,
        content: 'Chữ số 7 trong số 47 520 có giá trị là bao nhiêu?',
        type: 'MCQ',
        points: 0.5,
        options: ['7', '70', '700', '7000'],
        truncated: false,
      },
      {
        id: 'q2',
        questionNumber: 2,
        content: 'Giải thích hiện tượng quang hợp ở thực vật.',
        type: 'ESSAY_LONG',
        points: 2.0,
        truncated: false,
      },
    ],
  },
};

