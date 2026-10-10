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

const InteractiveBridgeTen: React.FC<{ formulaText: string; disabled?: boolean }> = ({
  formulaText,
  disabled,
}) => {
  const [value, setValue] = useState('');
  const formula = analyzeFormula(formulaText);

  return (
    <div className="w-[500px]">
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

