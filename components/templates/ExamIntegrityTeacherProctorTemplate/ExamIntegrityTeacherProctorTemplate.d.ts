import { default as React } from '../../../../node_modules/react';
export type ExamIntegrityProctorNavSection = 'dashboard' | 'exam' | 'results' | 'reports';
export interface ExamIntegrityTeacherProctorTemplateProps {
    brandName?: string;
    timerDisplay?: string;
    progressPercent?: number;
    isProctoringActive?: boolean;
    completedCount?: number;
    totalCount?: number;
    activeNavSection?: ExamIntegrityProctorNavSection;
    onNavigate?: (section: ExamIntegrityProctorNavSection) => void;
    onSubmit?: () => void;
    children: React.ReactNode;
    className?: string;
}
export declare const ExamIntegrityTeacherProctorTemplate: React.FC<ExamIntegrityTeacherProctorTemplateProps>;
export default ExamIntegrityTeacherProctorTemplate;
