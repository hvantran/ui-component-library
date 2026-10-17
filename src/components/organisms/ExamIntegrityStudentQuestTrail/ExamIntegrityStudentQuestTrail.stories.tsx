import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ExamIntegrityStudentQuestTrail } from './ExamIntegrityStudentQuestTrail';

const meta: Meta<typeof ExamIntegrityStudentQuestTrail> = {
  title: 'Organisms/ExamIntegrityStudentQuestTrail',
  component: ExamIntegrityStudentQuestTrail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ExamIntegrityStudentQuestTrail>;

export const Default: Story = {
  render: () => {
    const [current, setCurrent] = useState(2);
    return (
      <ExamIntegrityStudentQuestTrail
        totalQuestions={8}
        currentQuestion={current}
        answeredCount={3}
        answeredMap={{ 1: true, 3: true, 4: true }}
        flaggedMap={{ 5: true }}
        onSelectQuestion={setCurrent}
      />
    );
  },
};
