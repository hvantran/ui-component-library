import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentElementaryReassurance } from './ExamIntegrityStudentElementaryReassurance';

const meta: Meta<typeof ExamIntegrityStudentElementaryReassurance> = {
  title: 'Organisms/ExamIntegrityStudentElementaryReassurance',
  component: ExamIntegrityStudentElementaryReassurance,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentElementaryReassurance>;

export const Default: Story = {
  args: {
    title: 'You are doing wonderfully!',
    message: 'There are no trick questions here. Trust your thinking and take all the time you need! ✨',
  },
};
