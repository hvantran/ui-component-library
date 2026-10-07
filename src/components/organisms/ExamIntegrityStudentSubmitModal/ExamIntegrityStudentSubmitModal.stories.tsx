import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentSubmitModal } from './ExamIntegrityStudentSubmitModal';

const meta: Meta<typeof ExamIntegrityStudentSubmitModal> = {
  title: 'Organisms/ExamIntegrityStudentSubmitModal',
  component: ExamIntegrityStudentSubmitModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentSubmitModal>;

export const AllAnswered: Story = {
  args: {
    open: true,
    answeredCount: 20,
    totalCount: 20,
    onBack: () => {},
    onFinalSubmit: () => {},
  },
};

export const PartialAnswered: Story = {
  args: {
    open: true,
    answeredCount: 15,
    totalCount: 20,
    onBack: () => {},
    onFinalSubmit: () => {},
  },
};

