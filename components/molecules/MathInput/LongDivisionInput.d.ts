import { default as React } from '../../../../node_modules/react';
import { ParsedFormula } from '../../../utils/mathFormulaAnalyzer';
interface LongDivisionInputProps {
    formula: ParsedFormula;
    value: string;
    disabled?: boolean;
    onChange: (value: string) => void;
}
/**
 * Molecule — LongDivisionInput
 *
 * Renders a Grade-3-style long division bracket layout:
 *
 *   93 645  │  9
 *           │──────────
 *   03      │  [quotient input]
 *     36    │
 *       04  │
 *         45│
 *           0│
 */
declare const LongDivisionInput: React.FC<LongDivisionInputProps>;
export default LongDivisionInput;
