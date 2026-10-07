import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
export interface ExamIntegrityTeacherIngestionTemplateProps {
    userName?: string;
    userRole?: string;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateExam?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    onSearch?: (query: string) => void;
    onNotifications?: () => void;
    onHelp?: () => void;
    onImportExam?: () => void;
    isLoading?: boolean;
    children?: React.ReactNode;
    className?: string;
}
export declare const ExamIntegrityTeacherIngestionTemplate: React.FC<ExamIntegrityTeacherIngestionTemplateProps>;
export default ExamIntegrityTeacherIngestionTemplate;
