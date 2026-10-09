import { default as React } from '../../../../node_modules/react';
export declare const EXAM_INTEGRITY_STUDENT_SIDEBAR_WIDTH = 256;
export declare const EXAM_INTEGRITY_STUDENT_SIDEBAR_DOCKED_WIDTH = 72;
export type ExamIntegrityStudentPortalSection = 'dashboard' | 'my-exams' | 'results';
export type ExamIntegrityNavDockMode = 'pinned' | 'docked' | 'auto-hide';
export interface ExamIntegrityStudentPortalSidebarProps {
    activeSection?: ExamIntegrityStudentPortalSection;
    studentName?: string;
    studentRole?: string;
    onNavigate?: (section: ExamIntegrityStudentPortalSection) => void;
    onHelp?: () => void;
    onLogout?: () => void;
    className?: string;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
}
export declare const ExamIntegrityStudentPortalSidebar: React.FC<ExamIntegrityStudentPortalSidebarProps>;
export default ExamIntegrityStudentPortalSidebar;
