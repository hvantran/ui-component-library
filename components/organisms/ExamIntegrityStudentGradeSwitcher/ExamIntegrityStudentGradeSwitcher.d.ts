import { default as React } from '../../../../node_modules/react';
export type GradeTierKey = 'all' | 'distinction' | 'good' | 'average' | 'remediation';
export interface StudentExamSummary {
    sessionId: string;
    studentId: string;
    studentName?: string;
    examTitle?: string;
    totalEarned: number;
    totalMax: number;
    finalScore10: number;
    pendingEssayCount?: number;
    submittedAt?: string;
    status?: string;
}
export interface GradeTierConfig {
    key: GradeTierKey;
    label: string;
    minScore: number;
    maxScore: number;
    badgeClass: string;
    activeClass: string;
}
export declare const DEFAULT_GRADE_TIERS: GradeTierConfig[];
export interface ExamIntegrityStudentGradeSwitcherProps {
    students: StudentExamSummary[];
    selectedSessionId?: string;
    onSelectStudent: (student: StudentExamSummary) => void;
    title?: string;
    showStats?: boolean;
    gradeTiers?: GradeTierConfig[];
    className?: string;
}
export declare const resolveGradeTierKey: (score10: number) => GradeTierKey;
export declare const ExamIntegrityStudentGradeSwitcher: React.FC<ExamIntegrityStudentGradeSwitcherProps>;
export default ExamIntegrityStudentGradeSwitcher;
