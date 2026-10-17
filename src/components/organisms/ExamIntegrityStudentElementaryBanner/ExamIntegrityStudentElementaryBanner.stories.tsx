import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentElementaryBanner } from './ExamIntegrityStudentElementaryBanner';

const meta: Meta<typeof ExamIntegrityStudentElementaryBanner> = {
  title: 'Organisms/ExamIntegrityStudentElementaryBanner',
  component: ExamIntegrityStudentElementaryBanner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentElementaryBanner>;

export const Default: Story = {
  args: {
    mascotEmoji: '🦉',
    subjectTitle: '🦁 Grade 4 Math & Logic Quest',
    guardianLabel: '🛡️ Friendly Guardian Active',
  },
};
