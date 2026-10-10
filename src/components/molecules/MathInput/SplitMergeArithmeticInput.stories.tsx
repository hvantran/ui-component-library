import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SplitMergeArithmeticInput from './SplitMergeArithmeticInput';
import { analyzeFormula } from '../../../utils/mathFormulaAnalyzer';

const meta: Meta<typeof SplitMergeArithmeticInput> = {
  title: 'Molecules/MathInput/SplitMergeArithmeticInput',
  component: SplitMergeArithmeticInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SplitMergeArithmeticInput>;

const InteractiveSplitMerge: React.FC<{ formulaText: string; mode?: 'merge' | 'split'; disabled?: boolean }> = ({
  formulaText,
  mode,
  disabled,
}) => {
  const [value, setValue] = useState('');
  const formula = analyzeFormula(formulaText);

  return (
    <div className="w-[420px]">
      <SplitMergeArithmeticInput
        formula={formula}
        value={value}
        disabled={disabled}
        onChange={setValue}
        mode={mode}
      />
    </div>
  );
};

export const AdditionMerge: Story = {
  render: () => <InteractiveSplitMerge formulaText="3 + 2 = ?" />,
};

export const SubtractionSplit: Story = {
  render: () => <InteractiveSplitMerge formulaText="5 - 2 = ?" />,
};

export const AdditionWithPrepopulatedAnswer: Story = {
  render: () => {
    const formula = analyzeFormula('4 + 5 = ?');
    return (
      <div className="w-[420px]">
        <SplitMergeArithmeticInput
          formula={formula}
          value="9"
          onChange={() => {}}
        />
      </div>
    );
  },
};

export const DisabledState: Story = {
  render: () => <InteractiveSplitMerge formulaText="6 + 3 = ?" disabled={true} />,
};

