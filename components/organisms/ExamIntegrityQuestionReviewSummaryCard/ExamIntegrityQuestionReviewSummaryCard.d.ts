import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityQuestionReviewSummaryCardProps {
    title?: string;
    filename?: string;
    totalQuestions: number;
    totalPoints: number;
    flaggedCount?: number;
    className?: string;
}
export declare const ExamIntegrityQuestionReviewSummaryCard: React.FC<ExamIntegrityQuestionReviewSummaryCardProps>;
