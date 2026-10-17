import { default as React } from '../../../../node_modules/react';
import { ExamIntegrityDashboardSection, ExamIntegrityNavDockMode } from '../ExamIntegrityTeacherDashboardTemplate';
export interface ExamIntegrityScoringQueueItem {
    sessionId: string;
    examTitle: string;
    studentId: string;
    pendingEssayCount: number;
    totalEarned: number;
    totalMax: number;
    submittedAt?: string;
}
export interface ExamIntegrityEssayScoreItem {
    questionId: string;
    questionNumber?: number;
    questionText?: string;
    maxPoints: number;
    earnedPoints?: number;
    studentAnswer?: string;
    correctAnswer?: string;
    status: string;
    explanation?: string;
    questionType?: string;
}
export interface ExamIntegrityScoringDashboard {
    sessionId?: string;
    examTitle?: string;
    finalScore10: number;
    scores: ExamIntegrityEssayScoreItem[];
}
export interface ExamIntegrityTeacherScoringTemplateProps {
    userName?: string;
    userRole?: string;
    onNavigate?: (section: ExamIntegrityDashboardSection) => void;
    onCreateExam?: () => void;
    onSettings?: () => void;
    onLogout?: () => void;
    dockMode?: ExamIntegrityNavDockMode;
    onDockModeChange?: (mode: ExamIntegrityNavDockMode) => void;
    className?: string;
    pageTitle?: string;
    pageSubtitle?: string;
    queue?: ExamIntegrityScoringQueueItem[];
    selectedSessionId?: string;
    onSelectSession?: (sessionId: string) => void;
    dashboard?: ExamIntegrityScoringDashboard | null;
    isLoadingQueue?: boolean;
    isLoadingSubmission?: boolean;
    isSavingScore?: boolean;
    onSaveScore?: (params: {
        questionId: string;
        earnedPoints: number;
        explanation?: string;
    }) => void;
    onMarkCorrect?: (params: {
        questionId: string;
        maxPoints: number;
        explanation?: string;
    }) => void;
}
export declare const ExamIntegrityTeacherScoringTemplate: React.FC<ExamIntegrityTeacherScoringTemplateProps>;
export default ExamIntegrityTeacherScoringTemplate;
