import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentProTips } from './ExamIntegrityStudentProTips';

const meta: Meta<typeof ExamIntegrityStudentProTips> = {
  title: 'Organisms/ExamIntegrityStudentProTips',
  component: ExamIntegrityStudentProTips,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentProTips>;

export const HighSchool: Story = {
  args: {
    tips: [
      'Read the entire question carefully before choosing an option.',
      'Eliminate obviously incorrect answers first.',
      'Flag questions you are uncertain about and return later.',
    ],
    variant: 'high',
  },
};

export const MiddleSchool: Story = {
  args: {
    tips: [
      'Take deep breaths if you feel rushed.',
      'Check your arithmetic calculations step-by-step.',
    ],
    variant: 'middle',
  },
};

export const ElementarySchool: Story = {
  args: {
    tips: [
      'Look at pictures carefully!',
      'Ask your teacher if you cannot see the question.',
    ],
    variant: 'elementary',
  },
};

