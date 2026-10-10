import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MathQuestionInput } from './index';

const meta: Meta<typeof MathQuestionInput> = {
  title: 'Molecules/MathInput/MathQuestionInput',
  component: MathQuestionInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MathQuestionInput>;

const InteractiveWrapper: React.FC<{ questionText: string; tags?: string[] }> = ({
  questionText,
  tags,
}) => {
  const [value, setValue] = useState('');
  return (
    <div className="w-[500px]">
      <MathQuestionInput
        questionText={questionText}
        value={value}
        onChange={setValue}
        tags={tags}
      />
    </div>
  );
};

export const SimpleAddition: Story = {
  render: () => <InteractiveWrapper questionText="4 722 + 5 369 = ?" />,
};

export const SimpleMultiplication: Story = {
  render: () => <InteractiveWrapper questionText="21 607 x 4 = ?" />,
};

export const LongDivisionGrade3: Story = {
  render: () => <InteractiveWrapper questionText="93 645 : 9 = ?" tags={['grade 3']} />,
};

export const ComplexFormula: Story = {
  render: () => (
    <InteractiveWrapper questionText="12 740 + 5 037 x 4 = ?" />
  ),
};

