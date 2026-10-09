import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityTeacherDashboardSidebar';
import { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
export interface ExamIntegrityTeacherDraftsTemplateProps {
    activeSection?: ExamIntegrityDashboardSection;
    userName?: string;
    userRole?: string;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateNew?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    onSearch?: (query: string) => void;
    onNotifications?: () => void;
    onHelp?: () => void;
    children: React.ReactNode;
    className?: string;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
}
export declare const ExamIntegrityTeacherDraftsTemplate: React.FC<ExamIntegrityTeacherDraftsTemplateProps>;
export default ExamIntegrityTeacherDraftsTemplate;
