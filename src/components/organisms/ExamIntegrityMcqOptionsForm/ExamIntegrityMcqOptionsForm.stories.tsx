import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityMcqOptionsForm } from './ExamIntegrityMcqOptionsForm';

const meta: Meta<typeof ExamIntegrityMcqOptionsForm> = {
  title: 'Organisms/ExamIntegrityMcqOptionsForm',
  component: ExamIntegrityMcqOptionsForm,
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityMcqOptionsForm>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    optionImages: [undefined, undefined, undefined, undefined],
    correctAnswer: 'A',
    onOptionChange: () => {},
    onCorrectAnswerChange: () => {},
  },
};

