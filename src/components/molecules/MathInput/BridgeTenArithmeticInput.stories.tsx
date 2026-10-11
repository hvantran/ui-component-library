import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import BridgeTenArithmeticInput from './BridgeTenArithmeticInput';
import { analyzeFormula } from '../../../utils/mathFormulaAnalyzer';

const meta: Meta<typeof BridgeTenArithmeticInput> = {
  title: 'Molecules/MathInput/BridgeTenArithmeticInput',
  component: BridgeTenArithmeticInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BridgeTenArithmeticInput>;

const InteractiveBridgeTen: React.FC<{
  formulaText: string;
  disabled?: boolean;
  className?: string;
}> = ({
  formulaText,
  disabled,
  className = 'w-[500px] max-w-full',
}) => {
  const [value, setValue] = useState('');
  const formula = analyzeFormula(formulaText);

  return (
    <div className={className}>
      <BridgeTenArithmeticInput
        formula={formula}
        value={value}
        disabled={disabled}
        onChange={setValue}
      />
    </div>
  );
};

export const AdditionMakeTen: Story = {
  render: () => <InteractiveBridgeTen formulaText="9 + 8 = ?" />,
};

export const SubtractionBridgeTen: Story = {
  render: () => <InteractiveBridgeTen formulaText="15 - 6 = ?" />,
};

export const AnotherAdditionMakeTen: Story = {
  render: () => <InteractiveBridgeTen formulaText="8 + 5 = ?" />,
};

export const AnotherSubtractionBridgeTen: Story = {
  render: () => <InteractiveBridgeTen formulaText="13 - 7 = ?" />,
};

export const DisabledState: Story = {
  render: () => <InteractiveBridgeTen formulaText="9 + 8 = ?" disabled={true} />,
};

export const ResponsiveTwoColumnGrid: Story = {
  render: () => {
    return (
      <div className="w-full max-w-[760px] p-4 bg-slate-100 rounded-3xl">
        <h3 className="text-base font-bold text-slate-800 mb-4">
          Số? (Hai cột mô phỏng màn hình thi)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InteractiveBridgeTen formulaText="12 - 9 = ?" className="w-full" />
          <InteractiveBridgeTen formulaText="7 + 5 = ?" className="w-full" />
          <InteractiveBridgeTen formulaText="12 - 9 = ?" className="w-full" />
          <InteractiveBridgeTen formulaText="15 - 7 = ?" className="w-full" />
        </div>
      </div>
    );
  },
};

