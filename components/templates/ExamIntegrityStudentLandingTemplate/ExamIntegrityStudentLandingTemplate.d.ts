import { default as React } from '../../../../node_modules/react';
export type StudentPortalSection = 'dashboard' | 'my-exams' | 'results';
export interface FilterItem {
    label: string;
    value: string;
}
export interface ExamIntegrityStudentLandingTemplateProps {
    studentName?: string;
    studentRole?: string;
    activeSection?: StudentPortalSection;
    pageTitle?: string;
    pageSubtitle?: string;
    filters?: FilterItem[];
    activeFilter?: string;
    onFilterChange?: (filterValue: string) => void;
    onNavigate?: (section: StudentPortalSection) => void;
    onHelp?: () => void;
    onSearch?: (query: string) => void;
    onNotifications?: () => void;
    sidebarSlot?: React.ReactNode;
    children: React.ReactNode;
    onLogout?: () => void;
    className?: string;
}
export declare const ExamIntegrityStudentLandingTemplate: React.FC<ExamIntegrityStudentLandingTemplateProps>;
export default ExamIntegrityStudentLandingTemplate;
