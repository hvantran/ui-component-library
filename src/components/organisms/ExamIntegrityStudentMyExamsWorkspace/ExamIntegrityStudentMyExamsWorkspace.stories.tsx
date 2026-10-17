import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ExamIntegrityStudentMyExamsWorkspace } from './ExamIntegrityStudentMyExamsWorkspace';

const meta: Meta<typeof ExamIntegrityStudentMyExamsWorkspace> = {
  title: 'Organisms/ExamIntegrityStudentMyExamsWorkspace',
  component: ExamIntegrityStudentMyExamsWorkspace,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentMyExamsWorkspace>;

export const Default: Story = {
  render: () => (
    <ExamIntegrityStudentMyExamsWorkspace>
      <div>Content Section 1</div>
      <div>Content Section 2</div>
    </ExamIntegrityStudentMyExamsWorkspace>
  ),
};
