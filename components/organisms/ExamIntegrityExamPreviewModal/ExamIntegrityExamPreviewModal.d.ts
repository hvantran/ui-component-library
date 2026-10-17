import { default as React } from '../../../../node_modules/react';
import { QuestionOption } from '../../../types/examIntegrity';
export interface PreviewQuestionDTO {
    questionNumber: number;
    content: string;
    stem?: string;
    type?: string;
    options?: unknown;
    questionParts?: any[];
    imageData?: string;
}
export interface ExamIntegrityExamPreviewModalProps {
    open: boolean;
    onClose: () => void;
    examTitle?: string;
    durationSeconds?: number;
    questions?: PreviewQuestionDTO[];
    isLoading?: boolean;
    mapOptions?: (options: unknown) => QuestionOption[];
}
export declare const ExamIntegrityExamPreviewModal: React.FC<ExamIntegrityExamPreviewModalProps>;
export default ExamIntegrityExamPreviewModal;
