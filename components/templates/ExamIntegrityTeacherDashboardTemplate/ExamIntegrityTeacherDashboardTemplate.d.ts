import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityTeacherDashboardSidebar';
export type ExamIntegrityDashboardSection = 'dashboard' | 'ingestion' | 'review' | 'scoring' | 'question-bank' | 'reports';
export type { ExamIntegrityNavDockMode };
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
    /** Navigation dock mode ('pinned' | 'docked' | 'auto-hide') */
    dockMode?: ExamIntegrityNavDockMode;
    /** Callback when user changes navigation dock mode */
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
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
