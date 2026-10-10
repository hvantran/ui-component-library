import { default as React } from '../../../../node_modules/react';
import { ParsedFormula } from '../../../utils/mathFormulaAnalyzer';
interface ComplexFormulaInputProps {
    formula: ParsedFormula;
    value: string;
    disabled?: boolean;
    onChange: (value: string) => void;
}
/**
 * Molecule — ComplexFormulaInput
 *
 * Provides specialized input UI for complex arithmetic problems (multiple operators).
 * Features:
 * - Large formula display area for readability
 * - Multi-line input workspace
 * - Order of operations hint
 * - Step-by-step calculation guidance
 */
declare const ComplexFormulaInput: React.FC<ComplexFormulaInputProps>;
export default ComplexFormulaInput;
