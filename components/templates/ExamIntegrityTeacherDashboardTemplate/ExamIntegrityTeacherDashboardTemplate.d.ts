import { default as React } from '../../../../node_modules/react';
export type ExamIntegrityDashboardSection = 'dashboard' | 'ingestion' | 'review' | 'scoring' | 'question-bank' | 'reports';
export interface SyncExamDialogState {
    examId: string;
    examTitle: string;
    linkedQuestionCount?: number;
}
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
    headerTitle?: string;
    headerSubtitle?: string;
    headerActionsSlot?: React.ReactNode;
    filtersSlot?: React.ReactNode;
    sidebar?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    /** State for inner sync questions confirmation dialog */
    syncDialogState?: SyncExamDialogState | null;
    /** Callback when teacher confirms sync in inner dialog */
    onConfirmSync?: () => void;
    /** Callback when teacher cancels or dismisses sync dialog */
    onCancelSync?: () => void;
    /** Whether question sync operation is currently in progress */
    isSyncingQuestions?: boolean;
}
export declare const ExamIntegrityTeacherDashboardTemplate: React.FC<ExamIntegrityTeacherDashboardTemplateProps>;
export default ExamIntegrityTeacherDashboardTemplate;
