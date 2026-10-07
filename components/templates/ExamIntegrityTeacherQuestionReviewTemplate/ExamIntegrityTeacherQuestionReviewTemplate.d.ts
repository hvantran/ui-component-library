import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityDashboardSection } from '../ExamIntegrityTeacherDashboardTemplate';
export interface ExamIntegrityTeacherQuestionReviewTemplateProps {
    userName?: string;
    userRole?: string;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateExam?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    onNotifications?: () => void;
    onHelp?: () => void;
    questionNumber?: number;
    totalQuestions?: number;
    examName?: string;
    onReplace?: () => void;
    onDelete?: () => void;
    onApprove?: () => void;
    onSaveDraft?: () => void;
    onPublish?: () => void;
    isLoading?: boolean;
    leftPanel?: React.ReactNode;
    rightPanel?: React.ReactNode;
    className?: string;
}
export declare const ExamIntegrityTeacherQuestionReviewTemplate: React.FC<ExamIntegrityTeacherQuestionReviewTemplateProps>;
export default ExamIntegrityTeacherQuestionReviewTemplate;
