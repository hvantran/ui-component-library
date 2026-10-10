import { default as React } from '../../../../node_modules/react';
import { DraftQuestionDTO } from '../../../types/examIntegrity';
export interface ExamIntegrityQuestionDisplayProps {
    question: DraftQuestionDTO;
    index: number;
    isLoading?: boolean;
    questionScore?: number | '';
    onQuestionScoreChange?: (value: number | '') => void;
    onQuestionScoreBlur?: () => void;
    questionImageData?: string;
    onQuestionImageUpload?: (file: File) => void;
    onQuestionImageRemove?: () => void;
    selectedCorrectAnswer?: string;
    onCorrectAnswerChange?: (value: string) => void;
    onCorrectAnswerBlur?: () => void;
}
export declare const ExamIntegrityQuestionDisplay: React.FC<ExamIntegrityQuestionDisplayProps>;
export default ExamIntegrityQuestionDisplay;
