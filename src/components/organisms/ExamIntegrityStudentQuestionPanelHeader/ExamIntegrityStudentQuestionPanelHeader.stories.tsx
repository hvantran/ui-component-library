import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentQuestionPanelHeader } from './ExamIntegrityStudentQuestionPanelHeader';

const meta: Meta<typeof ExamIntegrityStudentQuestionPanelHeader> = {
  title: 'Organisms/ExamIntegrityStudentQuestionPanelHeader',
  component: ExamIntegrityStudentQuestionPanelHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentQuestionPanelHeader>;

export const Default: Story = {
  args: {
    questionNumber: 3,
    subject: 'Mathematics',
    gradeLevel: 'Grade 10',
    tone: 'high',
    isFlagged: false,
    onFlag: () => {},
  },
};

export const Flagged: Story = {
  args: {
    questionNumber: 7,
    subject: 'Physics',
    gradeLevel: 'Grade 11',
    tone: 'middle',
    isFlagged: true,
    onFlag: () => {},
  },
};

