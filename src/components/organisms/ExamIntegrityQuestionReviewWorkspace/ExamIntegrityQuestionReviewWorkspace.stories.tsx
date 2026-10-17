import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityQuestionReviewWorkspace } from './ExamIntegrityQuestionReviewWorkspace';

const meta: Meta<typeof ExamIntegrityQuestionReviewWorkspace> = {
  title: 'Organisms/ExamIntegrityQuestionReviewWorkspace',
  component: ExamIntegrityQuestionReviewWorkspace,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityQuestionReviewWorkspace>;

export const Default: Story = {
  args: {
    questions: [
      { id: 'q1', questionNumber: 1 },
      { id: 'q2', questionNumber: 2 },
      { id: 'q3', questionNumber: 3 },
    ],
    currentIndex: 0,
    onSelectIndex: () => {},
    children: <div className="p-4 bg-gray-50 rounded">Question content display</div>,
  },
};

