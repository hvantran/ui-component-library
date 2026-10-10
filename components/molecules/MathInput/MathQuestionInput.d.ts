import { default as React } from '../../../../node_modules/react';
interface MathQuestionInputProps {
    questionText: string;
    value: string;
    disabled?: boolean;
    onChange: (value: string) => void;
    /** Optional tags (e.g. ['grade 3', 'grade3']) that select a grade-appropriate renderer. */
    tags?: string[];
}
/**
 * Molecule — MathQuestionInput
 *
 * Main entry point for rendering math question inputs.
 * Automatically detects formula type and renders appropriate specialized component.
 *
 * Renders:
 * - SimpleArithmeticInput for single-operator formulas (addition, subtraction, multiplication, division)
 * - SplitMergeArithmeticInput for Grade 1 addition/subtraction (number bonds / split-merge)
 * - BridgeTenArithmeticInput for Grade 1-2 addition/subtraction over 10 (Make 10 strategy)
 * - LongDivisionInput for Grade 3 division
 * - ComplexFormulaInput for multi-operator formulas
 */
declare const MathQuestionInput: React.FC<MathQuestionInputProps>;
export default MathQuestionInput;
