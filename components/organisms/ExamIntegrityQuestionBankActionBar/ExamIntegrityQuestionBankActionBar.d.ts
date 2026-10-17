import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityQuestionBankActionBarProps {
    totalCount: number;
    onPreview?: () => void;
    onAddQuestion?: () => void;
    onDeleteAll?: () => void;
    className?: string;
}
export declare const ExamIntegrityQuestionBankActionBar: React.FC<ExamIntegrityQuestionBankActionBarProps>;
