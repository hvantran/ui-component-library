import { default as React } from '../../../../../node_modules/react';
export type ExamIntegrityDashboardSection = 'dashboard' | 'ingestion' | 'review' | 'scoring' | 'question-bank' | 'reports';
export interface ExamIntegrityTeacherDashboardTemplateProps {
    userName?: string;
    userRole?: string;
    appTitle?: string;
    activeSection?: ExamIntegrityDashboardSection;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateExam?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    onSearch?: (query: string) => void;
    onNotifications?: () => void;
    onHelp?: () => void;
    sidebar?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
export declare const ExamIntegrityTeacherDashboardTemplate: React.FC<ExamIntegrityTeacherDashboardTemplateProps>;
export default ExamIntegrityTeacherDashboardTemplate;
