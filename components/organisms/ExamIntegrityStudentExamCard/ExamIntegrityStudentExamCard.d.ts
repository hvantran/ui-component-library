import { default as React } from '../../../../node_modules/react';
export interface SubjectConfig {
    label: string;
    icon: string;
    border: string;
    bg: string;
}
export interface ExamIntegrityStudentExamCardProps {
    id: string;
    title: string;
    questionCount: number;
    durationSeconds: number;
    totalPoints: number;
    tags?: string[];
    isElementary?: boolean;
    subject?: string;
    onStart: () => void;
    isStarting?: boolean;
    className?: string;
}
export declare const ExamIntegrityStudentExamCard: React.FC<ExamIntegrityStudentExamCardProps>;
