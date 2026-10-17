import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentElementarySidebar } from './ExamIntegrityStudentElementarySidebar';

const meta: Meta<typeof ExamIntegrityStudentElementarySidebar> = {
  title: 'Organisms/ExamIntegrityStudentElementarySidebar',
  component: ExamIntegrityStudentElementarySidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentElementarySidebar>;

export const Default: Story = {
  args: {
    mascotEmoji: '🦉',
    mascotName: 'Ollie the Owl',
    mascotTip: 'Take your time and read questions thoroughly!',
    flaggedNumbers: [2, 5],
    onJumpToQuestion: (q) => alert(`Jump to question ${q}`),
  },
};
