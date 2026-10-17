import { default as React } from '../../../../node_modules/react';
export interface StudentAchievementBadge {
    id: string;
    emoji: string;
    title: string;
    description: string;
    border?: string;
    bg?: string;
}
export interface ExamIntegrityStudentAchievementsTrayProps {
    title?: string;
    badges?: StudentAchievementBadge[];
    className?: string;
}
export declare const ExamIntegrityStudentAchievementsTray: React.FC<ExamIntegrityStudentAchievementsTrayProps>;
