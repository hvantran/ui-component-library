import { default as React } from '../../../../node_modules/react';
export interface ExamIntegrityDeleteAllQuestionsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    isDeleting?: boolean;
    totalCount?: number;
    className?: string;
}
export declare const ExamIntegrityDeleteAllQuestionsDialog: React.FC<ExamIntegrityDeleteAllQuestionsDialogProps>;
