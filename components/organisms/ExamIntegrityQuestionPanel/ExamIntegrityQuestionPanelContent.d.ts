import { default as React } from '../../../../node_modules/react';
import { AnswerPart, QuestionOption, QuestionPart, QuestionType } from '../../../types/examIntegrity';
export declare function parseComparison(prompt: string, _contextText?: string): {
    left: string;
    right: string;
} | null;
export interface ExamIntegrityQuestionPanelContentProps {
    questionNumber: number;
    questionText: string;
    questionStem?: string;
    questionType: QuestionType;
    options?: QuestionOption[];
    questionParts?: QuestionPart[];
    selectedAnswer?: string;
    selectedAnswerParts?: AnswerPart[];
    disabled?: boolean;
    onAnswerChange: (value: string) => void;
    onAnswerPartsChange?: (parts: AnswerPart[]) => void;
    imageData?: string;
    gradeLevel?: string;
    subject?: string;
}
export declare const ExamIntegrityQuestionPanelContent: React.FC<ExamIntegrityQuestionPanelContentProps>;
