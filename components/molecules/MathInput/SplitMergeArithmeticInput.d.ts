import { default as React } from '../../../../node_modules/react';
import { ParsedFormula } from '../../../utils/mathFormulaAnalyzer';
export interface SplitMergeArithmeticInputProps {
    formula: ParsedFormula;
    value: string;
    disabled?: boolean;
    onChange: (value: string) => void;
    /**
     * Explicit override for diagram mode ('merge' for addition, 'split' for subtraction).
     * Defaults to automatic detection based on formula type.
     */
    mode?: 'merge' | 'split';
}
/**
 * Molecule — SplitMergeArithmeticInput (Number Bonds / Tách - Gộp số)
 *
 * Provides specialized, child-friendly visual input for Grade 1 elementary math.
 * Represents addition as "Gộp" (merging parts into a whole) and
 * subtraction as "Tách" (splitting a whole into parts).
 */
declare const SplitMergeArithmeticInput: React.FC<SplitMergeArithmeticInputProps>;
export default SplitMergeArithmeticInput;
