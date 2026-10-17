import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityStudentExamResultCardProps {
    sessionId: string;
    examTitle: string;
    submittedAt?: string | null;
    finalScore10: number;
    totalEarned?: number;
    totalMax?: number;
    starsEarned?: number;
    pendingEssayCount?: number;
    isSelected?: boolean;
    isElementary?: boolean;
    onSelect: (sessionId: string) => void;
    className?: string;
}
export declare const ExamIntegrityStudentExamResultCard: React.FC<ExamIntegrityStudentExamResultCardProps>;
