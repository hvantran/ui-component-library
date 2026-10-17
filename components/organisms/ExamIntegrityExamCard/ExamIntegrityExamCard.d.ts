import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityExamCardProps {
    examId: string;
    title: string;
    durationSeconds: number;
    questionCount: number;
    totalPoints: number;
    tags?: string[];
    status?: string;
    onPreview: () => void;
    onManageQuestions: (examId: string) => void;
    isUpdatingQuestions?: boolean;
    onExport: () => void;
    isExporting?: boolean;
    onDelete: () => void;
    onSyncQuestions: (examId: string, title: string) => void;
    isSyncingQuestions?: boolean;
    className?: string;
}
export declare const ExamIntegrityExamCard: React.FC<ExamIntegrityExamCardProps>;
export default ExamIntegrityExamCard;
