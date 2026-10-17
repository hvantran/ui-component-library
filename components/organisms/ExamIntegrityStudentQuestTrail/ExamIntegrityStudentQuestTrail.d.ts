import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityStudentQuestTrailProps {
    totalQuestions: number;
    currentQuestion: number;
    answeredCount: number;
    answeredMap: Record<number, boolean>;
    flaggedMap: Record<number, boolean>;
    onSelectQuestion: (questionNumber: number) => void;
    className?: string;
}
export declare const ExamIntegrityStudentQuestTrail: React.FC<ExamIntegrityStudentQuestTrailProps>;
export default ExamIntegrityStudentQuestTrail;
