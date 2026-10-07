import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityStudentExamHeaderProps {
    brandName?: string;
    currentQuestion: number;
    totalQuestions: number;
    remainingSeconds: number;
    isProctoringActive?: boolean;
    onSettings?: () => void;
    className?: string;
}
export declare const ExamIntegrityStudentExamHeader: React.FC<ExamIntegrityStudentExamHeaderProps>;
export default ExamIntegrityStudentExamHeader;
