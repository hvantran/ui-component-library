import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityTeacherDashboardSidebar';
import { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
export interface ExamIntegrityTeacherReportsTemplateProps {
    activeSection?: ExamIntegrityDashboardSection;
    userName?: string;
    userRole?: string;
    activeTab?: number;
    tabs?: string[];
    onTabChange?: (tab: number) => void;
    onExport?: () => void;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onSearch?: (query: string) => void;
    onNotifications?: () => void;
    onHelp?: () => void;
    onLogout?: () => void;
    children: React.ReactNode;
    className?: string;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
}
export declare const ExamIntegrityTeacherReportsTemplate: React.FC<ExamIntegrityTeacherReportsTemplateProps>;
export default ExamIntegrityTeacherReportsTemplate;
