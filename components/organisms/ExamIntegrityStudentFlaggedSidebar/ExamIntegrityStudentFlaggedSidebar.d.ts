import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityStudentFlaggedSidebarProps {
    flaggedMap: Record<number, boolean>;
    totalQuestions: number;
    onJumpTo: (questionNumber: number) => void;
    currentQuestion: number;
    className?: string;
}
export declare const ExamIntegrityStudentFlaggedSidebar: React.FC<ExamIntegrityStudentFlaggedSidebarProps>;
export default ExamIntegrityStudentFlaggedSidebar;
