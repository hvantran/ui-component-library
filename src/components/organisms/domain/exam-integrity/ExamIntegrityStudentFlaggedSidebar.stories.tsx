import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentFlaggedSidebar } from './ExamIntegrityStudentFlaggedSidebar';

const meta: Meta<typeof ExamIntegrityStudentFlaggedSidebar> = {
  title: 'Organisms/Domain/ExamIntegrity/ExamIntegrityStudentFlaggedSidebar',
  component: ExamIntegrityStudentFlaggedSidebar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentFlaggedSidebar>;

export const Default: Story = {
  args: {
    flaggedMap: { 1: false, 2: true, 3: false, 4: true, 5: true },
    totalQuestions: 10,
    currentQuestion: 2,
  },
};

export const Empty: Story = {
  args: {
    flaggedMap: {},
    totalQuestions: 10,
    currentQuestion: 1,
  },
};

