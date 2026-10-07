import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityStudentQuestionPanelHeaderProps {
    questionNumber: number;
    subject?: string;
    gradeLevel?: string;
    tone?: 'elementary' | 'middle' | 'high';
    isFlagged?: boolean;
    onFlag?: () => void;
    className?: string;
}
export declare const ExamIntegrityStudentQuestionPanelHeader: React.FC<ExamIntegrityStudentQuestionPanelHeaderProps>;
export default ExamIntegrityStudentQuestionPanelHeader;
