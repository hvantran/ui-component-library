import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentWelcomeBanner } from './ExamIntegrityStudentWelcomeBanner';

const meta: Meta<typeof ExamIntegrityStudentWelcomeBanner> = {
  title: 'Organisms/ExamIntegrityStudentWelcomeBanner',
  component: ExamIntegrityStudentWelcomeBanner,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentWelcomeBanner>;

export const Default: Story = {
  args: {
    studentName: 'Alex',
    avatarEmoji: '🦁',
  },
};

