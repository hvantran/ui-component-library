import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityDashboardSection } from '../../templates/ExamIntegrityTeacherDashboardTemplate';
import { ExamIntegrityNavDockMode } from '../ExamIntegrityStudentPortalSidebar';
export declare const EXAM_INTEGRITY_TEACHER_SIDEBAR_WIDTH = 256;
export declare const EXAM_INTEGRITY_TEACHER_SIDEBAR_DOCKED_WIDTH = 72;
export type { ExamIntegrityNavDockMode };
export interface ExamIntegrityTeacherDashboardSidebarProps {
    activeSection?: ExamIntegrityDashboardSection;
    userName?: string;
    userRole?: string;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateExam?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    className?: string;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
}
export declare const ExamIntegrityTeacherDashboardSidebar: React.FC<ExamIntegrityTeacherDashboardSidebarProps>;
export default ExamIntegrityTeacherDashboardSidebar;
