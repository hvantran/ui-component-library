import { default as React } from '../../../../node_modules/react';
export interface ReviewQuestionItem {
    id: string;
    questionNumber?: number;
}
export interface ExamIntegrityQuestionReviewWorkspaceProps {
    questions?: ReviewQuestionItem[];
    currentIndex: number;
    onSelectIndex: (index: number) => void;
    onPrev?: () => void;
    onNext?: () => void;
    saveError?: string | null;
    children: React.ReactNode;
    className?: string;
}
export declare const ExamIntegrityQuestionReviewWorkspace: React.FC<ExamIntegrityQuestionReviewWorkspaceProps>;
