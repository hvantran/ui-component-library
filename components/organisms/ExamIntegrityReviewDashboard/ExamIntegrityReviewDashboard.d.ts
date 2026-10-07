import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityScoreItem {
    questionId: string;
    questionNumber?: number;
    status: 'CORRECT' | 'INCORRECT' | 'SELF_GRADE_REQUIRED' | 'PENDING_ESSAY';
    studentAnswer?: string;
    correctAnswer?: string;
    earnedPoints?: number;
    maxPoints?: number;
    feedback?: string;
}
export interface ExamIntegrityReviewDashboardData {
    totalEarned: number;
    totalMax: number;
    finalScore10: number;
    missedQuestionNumbers?: number[];
    scores: ExamIntegrityScoreItem[];
}
export interface ExamIntegrityReviewDashboardProps {
    dashboard: ExamIntegrityReviewDashboardData;
    isLoading?: boolean;
    className?: string;
}
export declare const ExamIntegrityReviewDashboard: React.FC<ExamIntegrityReviewDashboardProps>;
export default ExamIntegrityReviewDashboard;
