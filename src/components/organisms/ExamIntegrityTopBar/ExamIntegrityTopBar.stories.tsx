import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityTopBar } from './ExamIntegrityTopBar';

const meta: Meta<typeof ExamIntegrityTopBar> = {
  title: 'Organisms/ExamIntegrityTopBar',
  component: ExamIntegrityTopBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityTopBar>;

export const Default: Story = {
  args: {
    appTitle: 'Academic Management',
    userName: 'Prof. Hoa Tran',
  },
};

export const WithoutUser: Story = {
  args: {
    appTitle: 'Exam Integrity',
  },
};

export const WithStarCounter: Story = {
  args: {
    appTitle: 'Academic Management',
    userName: 'Hoa Tran (Student)',
    starCount: 128,
  },
};

