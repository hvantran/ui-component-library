import { default as React } from '../../../../node_modules/react';
import { QuestionOption, QuestionType } from '../../../types/examIntegrity';
export interface QuestionBankPreviewItem {
    id: string;
    questionNumber?: number;
    questionText: string;
    questionStem?: string;
    questionType?: QuestionType | string;
    options?: QuestionOption[];
    questionParts?: any[];
    imageData?: string;
}
export interface ExamIntegrityQuestionBankPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    questions?: QuestionBankPreviewItem[];
    totalElements?: number;
    isLoading?: boolean;
    isLoadingMore?: boolean;
    hasMore?: boolean;
    onLoadMore?: () => void;
    selectedAnswers?: Record<string, string>;
    onAnswerChange?: (questionId: string, answer: string) => void;
    className?: string;
}
export declare const ExamIntegrityQuestionBankPreviewModal: React.FC<ExamIntegrityQuestionBankPreviewModalProps>;
