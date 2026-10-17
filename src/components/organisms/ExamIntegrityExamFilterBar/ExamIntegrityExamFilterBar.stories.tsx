import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityExamFilterBar } from './ExamIntegrityExamFilterBar';

const meta: Meta<typeof ExamIntegrityExamFilterBar> = {
  title: 'Organisms/ExamIntegrityExamFilterBar',
  component: ExamIntegrityExamFilterBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityExamFilterBar>;

export const Default: Story = {
  args: {
    title: 'Filter exams',
    subtitle: 'Showing 12 of 15 exams',
    options: [
      { key: 'all', label: 'All', count: 15 },
      { key: 'published', label: 'Published', count: 12 },
      { key: 'draft', label: 'Draft', count: 3 },
    ],
    selectedKey: 'all',
    onSelectKey: () => {},
  },
};

