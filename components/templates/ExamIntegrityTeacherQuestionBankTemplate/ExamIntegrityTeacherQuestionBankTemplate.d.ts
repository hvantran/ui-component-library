import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityTeacherDashboardSidebar';
import { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
export interface ExamIntegrityTeacherQuestionBankTemplateProps {
    userName?: string;
    userRole?: string;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateExam?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    onSearch?: (query: string) => void;
    onNotifications?: () => void;
    onHelp?: () => void;
    filterBar?: React.ReactNode;
    resultsBar?: React.ReactNode;
    isLoading?: boolean;
    children?: React.ReactNode;
    className?: string;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
}
export declare const ExamIntegrityTeacherQuestionBankTemplate: React.FC<ExamIntegrityTeacherQuestionBankTemplateProps>;
export default ExamIntegrityTeacherQuestionBankTemplate;
