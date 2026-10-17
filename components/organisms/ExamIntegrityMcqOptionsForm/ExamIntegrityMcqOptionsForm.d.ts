import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityMcqOptionsFormProps {
    options: string[];
    optionImages?: (string | undefined)[];
    correctAnswer: string;
    idPrefix?: string;
    onOptionChange: (idx: number, val: string) => void;
    onOptionImageChange?: (idx: number, imageBase64?: string) => void;
    onCorrectAnswerChange: (val: string) => void;
    onError?: (msg: string) => void;
    className?: string;
}
export declare const ExamIntegrityMcqOptionsForm: React.FC<ExamIntegrityMcqOptionsFormProps>;
