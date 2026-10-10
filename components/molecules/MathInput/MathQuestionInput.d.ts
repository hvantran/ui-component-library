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
 * - ComplexFormulaInput for multi-operator formulas
 */
declare const MathQuestionInput: React.FC<MathQuestionInputProps>;
export default MathQuestionInput;
