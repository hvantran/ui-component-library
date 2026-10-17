import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentAchievementsTray } from './ExamIntegrityStudentAchievementsTray';

const meta: Meta<typeof ExamIntegrityStudentAchievementsTray> = {
  title: 'Organisms/ExamIntegrityStudentAchievementsTray',
  component: ExamIntegrityStudentAchievementsTray,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentAchievementsTray>;

export const Default: Story = {
  args: {},
};

