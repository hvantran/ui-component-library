import { default as React } from '../../../../node_modules/react';
import { ParsedFormula } from '../../../utils/mathFormulaAnalyzer';
export interface BridgeTenArithmeticInputProps {
    formula: ParsedFormula;
    value: string;
    disabled?: boolean;
    onChange: (value: string) => void;
}
export interface BridgeTenAnswer {
    finalAnswer: string;
    split1: string;
    split2: string;
}
export declare const parseBridgeTenAnswer: (rawValue: string) => BridgeTenAnswer;
export declare const serializeBridgeTenAnswer: (answer: BridgeTenAnswer) => string;
/**
 * Molecule — BridgeTenArithmeticInput (Tách - Gộp qua 10 trong phạm vi 20 / Make 10 Strategy)
 *
 * Keeps original formula horizontally on the SAME line with the final answer input.
 * Students directly input the split numbers under the fork branches,
 * without any merge bracket, merge input, or explanatory guide text.
 *
 * Addition layout:
 *    9    +    8    =    [ ? ] (final answer)
 *             / \
 *          [?1] [?2] (split inputs)
 *
 * Subtraction layout:
 *        15        −    6    =    [ ? ] (final answer)
 *       /  \
 *    [?1]  [?2] (split inputs)
 */
declare const BridgeTenArithmeticInput: React.FC<BridgeTenArithmeticInputProps>;
export default BridgeTenArithmeticInput;
