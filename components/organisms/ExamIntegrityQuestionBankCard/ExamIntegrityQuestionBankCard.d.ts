import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityQuestionBankCardProps {
    index: number;
    content: string;
    type?: string;
    points?: number;
    usesCount?: number;
    tags?: string[];
    onEdit?: () => void;
    onDelete?: () => void;
    className?: string;
}
export declare const ExamIntegrityQuestionBankCard: React.FC<ExamIntegrityQuestionBankCardProps>;
