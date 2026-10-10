import { default as React } from '../../../../node_modules/react';
import { AnswerPart, QuestionOption, QuestionPart, QuestionType } from '../../../types/examIntegrity';
export interface ExamIntegrityQuestionPanelProps {
    questionNumber: number;
    subject?: string;
    gradeLevel?: string;
    questionText: string;
    questionStem?: string;
    questionType: QuestionType;
    options?: QuestionOption[];
    questionParts?: QuestionPart[];
    selectedAnswer?: string;
    selectedAnswerParts?: AnswerPart[];
    isFlagged?: boolean;
    disabled?: boolean;
    onAnswerChange: (value: string) => void;
    onAnswerPartsChange?: (parts: AnswerPart[]) => void;
    onFlag?: () => void;
    imageData?: string;
    isLoading?: boolean;
}
/**
 * Organism — ExamIntegrityQuestionPanel
 *
 * Exam question paper presentation organism with grade tone styling,
 * question panel header, and interactive question content (MCQ/Essay/Math).
 */
export declare const ExamIntegrityQuestionPanel: React.FC<ExamIntegrityQuestionPanelProps>;
export default ExamIntegrityQuestionPanel;
