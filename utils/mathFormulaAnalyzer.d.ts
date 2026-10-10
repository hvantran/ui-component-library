/**
 * Math Formula Analyzer Utility
 * Detects and classifies mathematical formulas for optimized student input rendering
 */
export type MathFormulaType = 'SIMPLE_ADDITION' | 'SIMPLE_SUBTRACTION' | 'SIMPLE_MULTIPLICATION' | 'SIMPLE_DIVISION' | 'COMPLEX_FORMULA' | 'UNKNOWN';
export interface ParsedFormula {
    type: MathFormulaType;
    formula: string;
    operands?: number[];
    operator?: string;
    operatorCount: number;
    hasDecimal: boolean;
    displayFormula: string;
}
/**
 * Analyzes a formula string and returns its type and components
 * @param formula - The formula text to analyze
 * @returns ParsedFormula object with type and metadata
 */
export declare const analyzeFormula: (formula: string) => ParsedFormula;
/**
 * Determines if answer format is correct for the formula type
 */
export declare const validateAnswerFormat: (answer: string, _formulaType: MathFormulaType) => {
    isValid: boolean;
    error?: string;
};
/**
 * Formats a number for display (with proper spacing for large numbers)
 */
export declare const formatNumberDisplay: (num: number | string) => string;
/**
 * Extracts the expected answer format suggestion
 */
export declare const getAnswerPlaceholder: (formulaType: MathFormulaType) => string;
