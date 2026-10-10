import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityGradeSwitcherPill } from './ExamIntegrityGradeSwitcherPill';

const meta: Meta<typeof ExamIntegrityGradeSwitcherPill> = {
  title: 'Molecules/ExamIntegrityGradeSwitcherPill',
  component: ExamIntegrityGradeSwitcherPill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityGradeSwitcherPill>;

export const SwitcherEnabled: Story = {
  args: {
    canSwitchGrade: true,
    effectiveGrade: 3,
    overrideGrade: null,
    onGradeChange: () => {},
  },
};

export const LockedGrade: Story = {
  args: {
    canSwitchGrade: false,
    effectiveGrade: 4,
  },
};
