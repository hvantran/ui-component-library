import { default as React } from '../../../../node_modules/react';
import { ParsedFormula } from '../../../utils/mathFormulaAnalyzer';
interface SimpleArithmeticInputProps {
    formula: ParsedFormula;
    value: string;
    disabled?: boolean;
    onChange: (value: string) => void;
}
/**
 * Molecule — SimpleArithmeticInput
 *
 * Provides specialized input UI for simple arithmetic problems (single operator).
 * Features:
 * - Clean vertical layout for formula display
 * - Large number inputs optimized for reading
 * - Operator symbol display
 * - Vertical calculation workspace visualization
 */
declare const SimpleArithmeticInput: React.FC<SimpleArithmeticInputProps>;
export default SimpleArithmeticInput;
