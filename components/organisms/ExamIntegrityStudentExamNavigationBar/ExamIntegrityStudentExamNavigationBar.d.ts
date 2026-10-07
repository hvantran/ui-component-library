import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityStudentExamNavigationBarProps {
    canGoPrev: boolean;
    canGoNext: boolean;
    isLastQuestion?: boolean;
    flaggedCount?: number;
    onPrevious: () => void;
    onNext: () => void;
    onSubmit: () => void;
    onReviewFlagged?: () => void;
    className?: string;
}
export declare const ExamIntegrityStudentExamNavigationBar: React.FC<ExamIntegrityStudentExamNavigationBarProps>;
export default ExamIntegrityStudentExamNavigationBar;
