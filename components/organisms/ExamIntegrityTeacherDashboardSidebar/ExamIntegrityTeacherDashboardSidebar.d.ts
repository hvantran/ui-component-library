import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityDashboardSection } from '../../templates/ExamIntegrityTeacherDashboardTemplate';
export declare const EXAM_INTEGRITY_TEACHER_SIDEBAR_WIDTH = 256;
export interface ExamIntegrityTeacherDashboardSidebarProps {
    activeSection?: ExamIntegrityDashboardSection;
    userName?: string;
    userRole?: string;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateExam?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    className?: string;
}
export declare const ExamIntegrityTeacherDashboardSidebar: React.FC<ExamIntegrityTeacherDashboardSidebarProps>;
export default ExamIntegrityTeacherDashboardSidebar;
