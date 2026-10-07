import { default as React } from '../../../../node_modules/react';
export declare const EXAM_INTEGRITY_STUDENT_SIDEBAR_WIDTH = 256;
export type ExamIntegrityStudentPortalSection = 'dashboard' | 'my-exams' | 'results';
export interface ExamIntegrityStudentPortalSidebarProps {
    activeSection?: ExamIntegrityStudentPortalSection;
    studentName?: string;
    studentRole?: string;
    onNavigate?: (section: ExamIntegrityStudentPortalSection) => void;
    onHelp?: () => void;
    onLogout?: () => void;
    className?: string;
}
export declare const ExamIntegrityStudentPortalSidebar: React.FC<ExamIntegrityStudentPortalSidebarProps>;
export default ExamIntegrityStudentPortalSidebar;
