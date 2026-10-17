import { default as React } from '../../../../node_modules/react';
export interface CreateExamFromBankValues {
    title: string;
    durationSeconds: number;
    tags?: string[];
    reviewNotes?: string;
    mcqCount: number;
    essayShortCount: number;
    essayLongCount: number;
}
export interface ExamIntegrityCreateExamDialogProps {
    open: boolean;
    onClose: () => void;
    onSubmit: (values: CreateExamFromBankValues) => void;
    isLoading?: boolean;
    availableTags?: string[];
    isTagsLoading?: boolean;
}
export declare const ExamIntegrityCreateExamDialog: React.FC<ExamIntegrityCreateExamDialogProps>;
export default ExamIntegrityCreateExamDialog;
