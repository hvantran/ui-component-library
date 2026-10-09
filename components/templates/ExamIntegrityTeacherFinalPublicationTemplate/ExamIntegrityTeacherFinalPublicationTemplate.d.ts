import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityNavDockMode } from '../../organisms/ExamIntegrityTeacherDashboardSidebar';
import { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
export interface ExamIntegrityFinalPublicationStats {
    approvedQuestions?: number;
    totalPoints?: number;
    essayRubricsStatus?: string;
}
export interface ExamIntegrityFinalPublicationFormValues {
    examTitle?: string;
    durationSeconds?: number;
    tags?: string[];
    reviewNotes?: string;
}
export interface ExamIntegrityDraftQuestionSummary {
    id?: string;
    questionNumber?: number;
    content?: string;
    points?: number;
    questionType?: string;
    imageData?: string;
}
export interface ExamIntegrityTeacherFinalPublicationTemplateProps {
    userName?: string;
    userRole?: string;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateExam?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    onSearch?: (query: string) => void;
    onNotifications?: () => void;
    onHelp?: () => void;
    stats?: ExamIntegrityFinalPublicationStats;
    formValues?: ExamIntegrityFinalPublicationFormValues;
    isLoading?: boolean;
    onFormChange?: (field: keyof ExamIntegrityFinalPublicationFormValues, value: string | string[] | number) => void;
    onSaveDraft?: () => void;
    onPublish?: () => void;
    questions?: ExamIntegrityDraftQuestionSummary[];
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
    className?: string;
}
export declare const ExamIntegrityTeacherFinalPublicationTemplate: React.FC<ExamIntegrityTeacherFinalPublicationTemplateProps>;
export default ExamIntegrityTeacherFinalPublicationTemplate;
